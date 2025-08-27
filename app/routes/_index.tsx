import { useState, useRef, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Play, Pause, RotateCcw, Download, Upload, Loader2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { createSimpleLoop, downloadBlob } from "~/utils/simpleVideoProcessor";

export const meta: MetaFunction = () => {
  return [
    { title: "Video Loop Creator" },
    { name: "description", content: "動画をトリミングしてループ動画を作成" },
  ];
};

interface VideoTrimState {
  startTime: number;
  endTime: number;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  videoFile: File | null;
  videoUrl: string | null;
  isProcessing: boolean;
  frameRate: number;
  startThumbnail: string | null;
  endThumbnail: string | null;
  isGeneratingThumbnails: boolean;
  isDragging: boolean;
  draggingMarker: 'start' | 'end' | null;
}

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loopStartTimeRef = useRef<number>(0);
  const loopEndTimeRef = useRef<number>(0);
  const [state, setState] = useState<VideoTrimState>({
    startTime: 0,
    endTime: 0,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    videoFile: null,
    videoUrl: null,
    isProcessing: false,
    frameRate: 30, // デフォルト30fps
    startThumbnail: null,
    endThumbnail: null,
    isGeneratingThumbnails: false,
    isDragging: false,
    draggingMarker: null,
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setState(prev => ({
        ...prev,
        videoFile: file,
        videoUrl: url,
        startTime: 0,
        endTime: 0,
        currentTime: 0,
        isPlaying: false,
      }));
    }
  };

  const handleVideoMetadataLoaded = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      
      // フレームレートを推定（一般的な値から選択）
      // より正確にはメタデータから取得する必要があるが、ブラウザAPIでは制限がある
      let estimatedFrameRate = 30; // デフォルト
      
      // ファイル名や一般的なパターンから推定
      if (state.videoFile?.name.toLowerCase().includes('60fps') || 
          state.videoFile?.name.toLowerCase().includes('60p')) {
        estimatedFrameRate = 60;
      } else if (state.videoFile?.name.toLowerCase().includes('24fps') ||
                 state.videoFile?.name.toLowerCase().includes('24p')) {
        estimatedFrameRate = 24;
      } else if (state.videoFile?.name.toLowerCase().includes('25fps') ||
                 state.videoFile?.name.toLowerCase().includes('25p')) {
        estimatedFrameRate = 25;
      }
      
      setState(prev => ({
        ...prev,
        duration,
        endTime: duration,
        frameRate: estimatedFrameRate,
      }));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setState(prev => ({ ...prev, currentTime }));

      // ループ機能：終了時間に達したら開始時間に戻る
      // useRefを使って最新のループ時間を取得
      if (currentTime >= loopEndTimeRef.current && loopEndTimeRef.current > 0) {
        videoRef.current.currentTime = loopStartTimeRef.current;
      }
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (state.isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    }
  };

  const seekToTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setState(prev => ({ ...prev, currentTime: time }));
    }
  };

  const setStartTime = () => {
    setState(prev => ({ ...prev, startTime: prev.currentTime }));
  };

  const setEndTime = () => {
    setState(prev => ({ ...prev, endTime: prev.currentTime }));
  };

  const resetLoop = () => {
    seekToTime(state.startTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  const downloadLoop = async () => {
    if (!state.videoFile || state.isProcessing) return;

    try {
      setState(prev => ({ ...prev, isProcessing: true }));
      
      const trimmedBlob = await createSimpleLoop(
        state.videoFile,
        state.startTime,
        state.endTime
      );

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `loop-${timestamp}.mp4`;
      
      downloadBlob(trimmedBlob, filename);
    } catch (error) {
      console.error('Error processing video:', error);
      alert('動画の処理中にエラーが発生したナリ！ブラウザで動画フォーマットがサポートされていない可能性がありますナリ。');
    } finally {
      setState(prev => ({ ...prev, isProcessing: false }));
    }
  };

  // キーボードショートカット
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!videoRef.current) return;
      
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          togglePlayPause();
          break;
        case 'KeyI':
          event.preventDefault();
          setStartTime();
          break;
        case 'KeyO':
          event.preventDefault();
          setEndTime();
          break;
        case 'KeyR':
          event.preventDefault();
          resetLoop();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + 左矢印でフレーム単位で戻る
            seekToPreviousFrame();
          } else if (event.shiftKey) {
            // Shift + 左矢印で0.1秒戻る
            seekToTime(Math.max(0, state.currentTime - 0.1));
          } else {
            // 左矢印で1秒戻る
            seekToPreviousSecond();
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + 右矢印でフレーム単位で進む
            seekToNextFrame();
          } else if (event.shiftKey) {
            // Shift + 右矢印で0.1秒進む
            seekToTime(Math.min(state.duration, state.currentTime + 0.1));
          } else {
            // 右矢印で1秒進む
            seekToNextSecond();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [state.currentTime, state.duration, togglePlayPause, setStartTime, setEndTime, resetLoop]);

  const jumpToLoop = () => {
    seekToTime(state.startTime);
  };

  const previewLoop = () => {
    // 設定された開始時間から終了時間までをループ再生
    seekToTime(state.startTime);
    if (videoRef.current) {
      videoRef.current.play();
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  // フレーム単位での操作
  const getFrameDuration = () => {
    return 1 / state.frameRate;
  };

  const seekToNextFrame = () => {
    const frameDuration = getFrameDuration();
    const newTime = Math.min(state.duration, state.currentTime + frameDuration);
    seekToTime(newTime);
  };

  const seekToPreviousFrame = () => {
    const frameDuration = getFrameDuration();
    const newTime = Math.max(0, state.currentTime - frameDuration);
    seekToTime(newTime);
  };

  const seekToNextSecond = () => {
    const newTime = Math.min(state.duration, state.currentTime + 1);
    seekToTime(newTime);
  };

  const seekToPreviousSecond = () => {
    const newTime = Math.max(0, state.currentTime - 1);
    seekToTime(newTime);
  };

  // マーカードラッグ機能
  const handleMarkerMouseDown = (marker: 'start' | 'end') => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    // ドラッグ開始時に動画が再生中だった場合、一時停止
    const wasPlaying = state.isPlaying;
    if (videoRef.current && wasPlaying) {
      videoRef.current.pause();
    }

    setState(prev => ({
      ...prev,
      isDragging: true,
      draggingMarker: marker,
      isPlaying: false, // ドラッグ中は停止状態に
    }));

    document.addEventListener('mousemove', handleMarkerMouseMove);
    document.addEventListener('mouseup', (e) => handleMarkerMouseUp(e, wasPlaying));
  };

  const handleMarkerMouseMove = (event: MouseEvent) => {
    if (!state.isDragging || !state.draggingMarker || state.duration === 0) return;

    const timelineElement = document.querySelector('[data-timeline]');
    if (!timelineElement) return;

    const rect = timelineElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newTime = percentage * state.duration;

    if (state.draggingMarker === 'start') {
      // 開始マーカーの場合は終了時間より前に制限
      const clampedTime = Math.min(newTime, state.endTime - 0.01);
      const newStartTime = Math.max(0, clampedTime);
      setState(prev => ({
        ...prev,
        startTime: newStartTime,
      }));
      loopStartTimeRef.current = newStartTime;

      // ドラッグ中に動画がループ範囲外に出た場合は調整
      if (videoRef.current && videoRef.current.currentTime < newStartTime) {
        videoRef.current.currentTime = newStartTime;
      }
    } else if (state.draggingMarker === 'end') {
      // 終了マーカーの場合は開始時間より後に制限
      const clampedTime = Math.max(newTime, state.startTime + 0.01);
      const newEndTime = Math.min(state.duration, clampedTime);
      setState(prev => ({
        ...prev,
        endTime: newEndTime,
      }));
      loopEndTimeRef.current = newEndTime;

      // ドラッグ中に動画が終了時間を超えた場合は開始時間に戻す
      if (videoRef.current && videoRef.current.currentTime >= newEndTime) {
        videoRef.current.currentTime = state.startTime;
      }
    }
  };

  const handleMarkerMouseUp = (event?: MouseEvent, wasPlaying?: boolean) => {
    setState(prev => ({
      ...prev,
      isDragging: false,
      draggingMarker: null,
      // ドラッグ開始時に再生中だった場合は再開
      isPlaying: wasPlaying || false,
    }));

    // ドラッグ開始時に再生中だった場合は再開
    if (wasPlaying && videoRef.current) {
      videoRef.current.play();
    }

    document.removeEventListener('mousemove', handleMarkerMouseMove);
    document.removeEventListener('mouseup', handleMarkerMouseUp);
  };

  // サムネイル生成関数
  const generateThumbnail = (time: number): Promise<string> => {
    return new Promise((resolve) => {
      if (!videoRef.current) {
        resolve('');
        return;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        resolve('');
        return;
      }

      const video = videoRef.current;
      canvas.width = 160; // サムネイルサイズ
      canvas.height = 90;

      const originalTime = video.currentTime;
      video.currentTime = time;

      const onSeeked = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
        video.currentTime = originalTime; // 元の時間に戻す
        video.removeEventListener('seeked', onSeeked);
        resolve(dataURL);
      };

      video.addEventListener('seeked', onSeeked);
    });
  };

  // サムネイルを更新する関数
  const updateThumbnails = async () => {
    if (!videoRef.current || !state.videoUrl) return;

    setState(prev => ({ ...prev, isGeneratingThumbnails: true }));

    try {
      const [startThumb, endThumb] = await Promise.all([
        generateThumbnail(state.startTime),
        generateThumbnail(state.endTime)
      ]);

      setState(prev => ({
        ...prev,
        startThumbnail: startThumb,
        endThumbnail: endThumb,
        isGeneratingThumbnails: false
      }));
    } catch (error) {
      console.error('Error generating thumbnails:', error);
      setState(prev => ({ ...prev, isGeneratingThumbnails: false }));
    }
  };

  // 開始・終了時間が変更されたときにサムネイルを更新
  useEffect(() => {
    if (state.videoUrl && state.duration > 0) {
      updateThumbnails();
    }
  }, [state.startTime, state.endTime, state.videoUrl, state.duration]);

  // 開始時間と終了時間が変更された時にuseRefも更新
  useEffect(() => {
    loopStartTimeRef.current = state.startTime;
    loopEndTimeRef.current = state.endTime;
  }, [state.startTime, state.endTime]);

  // ドラッグイベントリスナーのクリーンアップ
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMarkerMouseMove);
      document.removeEventListener('mouseup', handleMarkerMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Video Loop Creator
          </h1>
          <p className="text-slate-300 mb-4">動画をトリミングして完璧なループを作成ナリ</p>
          
          {/* キーボードショートカット説明 */}
          <div className="bg-slate-800 rounded-lg p-4 max-w-3xl mx-auto">
            <div className="text-slate-400 text-sm mb-2">キーボードショートカット</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">Space</kbd> 再生/停止</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">I</kbd> 開始点設定</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">O</kbd> 終了点設定</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">R</kbd> ループ先頭へ</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">←→</kbd> 1秒移動</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">Shift+←→</kbd> 0.1秒移動</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+←→</kbd> 1フレーム移動</div>
              <div><kbd className="bg-slate-700 px-2 py-1 rounded">Cmd+←→</kbd> 1フレーム移動</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* ファイルアップロード */}
          {!state.videoUrl && (
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center mb-8">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="mx-auto mb-4 text-slate-400" size={48} />
              <p className="text-slate-300 mb-4">動画ファイルをアップロードしてくださいナリ</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                ファイルを選択
              </button>
            </div>
          )}

          {/* 動画プレイヤー */}
          {state.videoUrl && (
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="relative mb-6">
                <video
                  ref={videoRef}
                  src={state.videoUrl}
                  onLoadedMetadata={handleVideoMetadataLoaded}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full rounded-lg"
                  style={{ maxHeight: '400px' }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {!state.isPlaying && (
                    <button
                      onClick={togglePlayPause}
                      className="bg-black bg-opacity-50 p-4 rounded-full pointer-events-auto hover:bg-opacity-70 transition-colors"
                    >
                      <Play className="text-white" size={32} />
                    </button>
                  )}
                </div>
              </div>

              {/* コントロールパネル */}
              <div className="space-y-4">
                {/* 再生コントロール */}
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={togglePlayPause}
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                    title="再生/停止 (Space)"
                  >
                    {state.isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button
                    onClick={resetLoop}
                    className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                    title="ループ先頭へ (R)"
                  >
                    <RotateCcw size={20} />
                  </button>
                  <button
                    onClick={previewLoop}
                    className="bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded-full transition-colors font-medium"
                    title="設定されたループ範囲を再生"
                  >
                    ループ範囲再生
                  </button>
                  <button
                    onClick={downloadLoop}
                    disabled={state.isProcessing}
                    className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 p-3 rounded-full transition-colors"
                    title="ループ動画をダウンロード"
                  >
                    {state.isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
                  </button>
                </div>

                {/* 改良されたタイムライン */}
                <div className="space-y-2">
                  {/* フレーム操作コントロール */}
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-xs text-slate-400 mr-2">フレーム操作:</div>
                    <button
                      onClick={seekToPreviousSecond}
                      className="bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors"
                      title="1秒戻る"
                    >
                      <ChevronsLeft size={16} />
                    </button>
                    <button
                      onClick={seekToPreviousFrame}
                      className="bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors"
                      title={`1フレーム戻る (${(1/state.frameRate * 1000).toFixed(1)}ms)`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <select
                      value={state.frameRate}
                      onChange={(e) => setState(prev => ({ ...prev, frameRate: parseInt(e.target.value) }))}
                      className="bg-slate-600 text-white text-xs rounded px-2 py-1 border border-slate-500 focus:border-blue-400 focus:outline-none min-w-[60px]"
                      title="フレームレートを変更"
                    >
                      <option value="24">24fps</option>
                      <option value="25">25fps</option>
                      <option value="30">30fps</option>
                      <option value="50">50fps</option>
                      <option value="60">60fps</option>
                      <option value="120">120fps</option>
                    </select>
                    <button
                      onClick={seekToNextFrame}
                      className="bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors"
                      title={`1フレーム進む (${(1/state.frameRate * 1000).toFixed(1)}ms)`}
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={seekToNextSecond}
                      className="bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors"
                      title="1秒進む"
                    >
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>0:00</span>
                    <span>{formatTime(state.duration)}</span>
                  </div>
                  
                  <div className="relative h-8 bg-slate-700 rounded-lg" data-timeline>
                    {/* ベースタイムライン */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      {/* 進行状況バー */}
                      <div
                        className="bg-blue-500 h-full rounded-lg transition-all duration-100"
                        style={{ width: `${(state.currentTime / state.duration) * 100}%` }}
                      />

                      {/* ループ範囲表示（設定された範囲） */}
                      <div
                        className="absolute top-0 bg-green-400 bg-opacity-40 h-full border-l-2 border-r-2 border-green-400"
                        style={{
                          left: `${(state.startTime / state.duration) * 100}%`,
                          width: `${((state.endTime - state.startTime) / state.duration) * 100}%`,
                        }}
                      />

                      {/* 現在時間までのプレビュー範囲表示 */}
                      <div
                        className="absolute top-0 bg-yellow-400 bg-opacity-20 h-full border-l-2 border-yellow-400"
                        style={{
                          left: `${(state.startTime / state.duration) * 100}%`,
                          width: `${((state.currentTime - state.startTime) / state.duration) * 100}%`,
                        }}
                      />
                    </div>

                    {/* 開始時間マーカー */}
                    <div
                      className={`absolute top-0 w-3 h-8 bg-green-500 rounded cursor-pointer hover:bg-green-400 transition-colors flex items-center justify-center ${
                        state.draggingMarker === 'start' ? 'scale-110 bg-green-300' : ''
                      }`}
                      style={{ left: `${(state.startTime / state.duration) * 100}%`, transform: 'translateX(-50%)' }}
                      title={`開始: ${formatTime(state.startTime)} (ドラッグで調整)`}
                      onMouseDown={handleMarkerMouseDown('start')}
                    >
                      <div className="w-1 h-4 bg-white rounded"></div>
                    </div>

                    {/* 終了時間マーカー */}
                    <div
                      className={`absolute top-0 w-3 h-8 bg-red-500 rounded cursor-pointer hover:bg-red-400 transition-colors flex items-center justify-center ${
                        state.draggingMarker === 'end' ? 'scale-110 bg-red-300' : ''
                      }`}
                      style={{ left: `${(state.endTime / state.duration) * 100}%`, transform: 'translateX(-50%)' }}
                      title={`終了: ${formatTime(state.endTime)} (ドラッグで調整)`}
                      onMouseDown={handleMarkerMouseDown('end')}
                    >
                      <div className="w-1 h-4 bg-white rounded"></div>
                    </div>

                    {/* 現在時間マーカー */}
                    <div
                      className="absolute top-0 w-1 h-8 bg-blue-300 cursor-pointer"
                      style={{ left: `${(state.currentTime / state.duration) * 100}%`, transform: 'translateX(-50%)' }}
                    />

                    {/* ドラッグ中の時間表示 */}
                    {state.isDragging && state.draggingMarker && (
                      <div
                        className="absolute top-[-30px] px-2 py-1 bg-slate-900 text-white text-xs rounded shadow-lg pointer-events-none border border-slate-600"
                        style={{
                          left: `${
                            state.draggingMarker === 'start'
                              ? (state.startTime / state.duration) * 100
                              : (state.endTime / state.duration) * 100
                          }%`,
                          transform: 'translateX(-50%)'
                        }}
                      >
                        {state.draggingMarker === 'start'
                          ? formatTime(state.startTime)
                          : formatTime(state.endTime)
                        }
                      </div>
                    )}

                    {/* タイムライン上のクリック可能エリア */}
                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={(e) => {
                        if (state.isDragging) return; // ドラッグ中はクリックを無効化
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const time = (x / rect.width) * state.duration;
                        seekToTime(time);
                      }}
                    />
                  </div>
                  
                  {/* 時間目盛り */}
                  <div className="relative h-4">
                    {Array.from({ length: 11 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute text-xs text-slate-500"
                        style={{ left: `${i * 10}%`, transform: 'translateX(-50%)' }}
                      >
                        {formatTime((state.duration * i) / 10)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 精密コントロール */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center space-y-3">
                    <div className="text-slate-300">開始時間</div>
                    <div className="flex justify-center">
                      {state.isGeneratingThumbnails ? (
                        <div className="w-32 h-18 bg-slate-600 rounded border-2 border-green-400 flex items-center justify-center">
                          <Loader2 className="animate-spin text-green-400" size={20} />
                        </div>
                      ) : state.startThumbnail ? (
                        <img 
                          src={state.startThumbnail} 
                          alt="開始フレーム" 
                          className="w-32 h-18 object-cover rounded border-2 border-green-400"
                        />
                      ) : (
                        <div className="w-32 h-18 bg-slate-600 rounded border-2 border-green-400 flex items-center justify-center text-slate-400 text-xs">
                          プレビュー
                        </div>
                      )}
                    </div>
                    <div className="font-mono text-2xl text-green-400">{formatTime(state.startTime)}</div>
                    <button
                      onClick={setStartTime}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors w-full"
                    >
                      現在の時間に設定
                    </button>
                    <div className="flex justify-center space-x-1">
                      <button
                        onClick={() => setState(prev => ({ ...prev, startTime: Math.max(0, prev.startTime - 0.1) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -0.1s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, startTime: Math.max(0, prev.startTime - 0.01) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -0.01s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, startTime: Math.min(prev.endTime, prev.startTime + 0.01) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +0.01s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, startTime: Math.min(prev.endTime, prev.startTime + 0.1) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +0.1s
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="text-slate-300">現在時間</div>
                    <div className="font-mono text-2xl text-blue-400">{formatTime(state.currentTime)}</div>
                    <div className="text-slate-500">/ {formatTime(state.duration)}</div>
                    <div className="flex justify-center space-x-1">
                      <button
                        onClick={() => seekToTime(Math.max(0, state.currentTime - 1))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -1s
                      </button>
                      <button
                        onClick={() => seekToTime(Math.max(0, state.currentTime - 0.1))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -0.1s
                      </button>
                      <button
                        onClick={() => seekToTime(Math.min(state.duration, state.currentTime + 0.1))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +0.1s
                      </button>
                      <button
                        onClick={() => seekToTime(Math.min(state.duration, state.currentTime + 1))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +1s
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="text-slate-300">終了時間</div>
                    <div className="flex justify-center">
                      {state.isGeneratingThumbnails ? (
                        <div className="w-32 h-18 bg-slate-600 rounded border-2 border-red-400 flex items-center justify-center">
                          <Loader2 className="animate-spin text-red-400" size={20} />
                        </div>
                      ) : state.endThumbnail ? (
                        <img 
                          src={state.endThumbnail} 
                          alt="終了フレーム" 
                          className="w-32 h-18 object-cover rounded border-2 border-red-400"
                        />
                      ) : (
                        <div className="w-32 h-18 bg-slate-600 rounded border-2 border-red-400 flex items-center justify-center text-slate-400 text-xs">
                          プレビュー
                        </div>
                      )}
                    </div>
                    <div className="font-mono text-2xl text-red-400">{formatTime(state.endTime)}</div>
                    <button
                      onClick={setEndTime}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors w-full"
                    >
                      現在の時間に設定
                    </button>
                    <div className="flex justify-center space-x-1">
                      <button
                        onClick={() => setState(prev => ({ ...prev, endTime: Math.max(prev.startTime, prev.endTime - 0.1) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -0.1s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, endTime: Math.max(prev.startTime, prev.endTime - 0.01) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        -0.01s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, endTime: Math.min(prev.duration, prev.endTime + 0.01) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +0.01s
                      </button>
                      <button
                        onClick={() => setState(prev => ({ ...prev, endTime: Math.min(prev.duration, prev.endTime + 0.1) }))}
                        className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs"
                      >
                        +0.1s
                      </button>
                    </div>
                  </div>
                </div>

                {/* 出力設定 */}
                <div className="bg-slate-700 rounded-lg p-6 space-y-4">
                  <div className="text-slate-300 text-lg font-medium text-center">エクスポート設定</div>
                  
                  <div className="text-center">
                    <div className="text-slate-400 text-sm mb-2">
                      ※ 出力形式：MP4（ブラウザ内処理のため）
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={downloadLoop}
                      disabled={state.isProcessing || !state.videoFile || state.endTime <= state.startTime}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-500 disabled:to-slate-500 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 mx-auto"
                    >
                      {state.isProcessing ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>処理中...</span>
                        </>
                      ) : (
                        <>
                          <Download size={20} />
                          <span>ループ動画をダウンロード</span>
                        </>
                      )}
                    </button>
                    
                    {!state.isProcessing && (
                      <p className="text-slate-400 text-sm mt-2">
                        ブラウザ内で動画を処理するため数秒かかりますナリ
                      </p>
                    )}
                  </div>
                </div>

                {/* ループ情報と統計 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="text-slate-300 mb-2">設定ループ時間</div>
                    <div className="text-lg font-mono text-green-400">
                      {formatTime(state.endTime - state.startTime)}
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="text-slate-300 mb-2">現在時間までのループ</div>
                    <div className="text-lg font-mono text-yellow-400">
                      {formatTime(state.currentTime - state.startTime)}
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="text-slate-300 mb-2">元動画から</div>
                    <div className="text-lg text-slate-100">
                      {state.duration > 0 ? `${((state.endTime - state.startTime) / state.duration * 100).toFixed(1)}%` : '0%'}
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="text-slate-300 mb-2">推定ファイルサイズ</div>
                    <div className="text-lg text-slate-100">
                      {state.videoFile ? 
                        `~${((state.videoFile.size * (state.endTime - state.startTime) / state.duration) / (1024 * 1024)).toFixed(1)}MB` 
                        : '--MB'
                      }
                    </div>
                  </div>
                </div>

                {/* 新しい動画をアップロード */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => {
                      setState({
                        startTime: 0,
                        endTime: 0,
                        duration: 0,
                        currentTime: 0,
                        isPlaying: false,
                        videoFile: null,
                        videoUrl: null,
                        isProcessing: false,
                        frameRate: 30,
                        startThumbnail: null,
                        endThumbnail: null,
                        isGeneratingThumbnails: false,
                        isDragging: false,
                        draggingMarker: null,
                      });
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="bg-slate-600 hover:bg-slate-500 px-6 py-3 rounded-lg transition-colors"
                  >
                    新しい動画をアップロード
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}