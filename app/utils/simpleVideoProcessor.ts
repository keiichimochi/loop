// シンプルなクライアントサイドビデオ処理
export async function createSimpleLoop(
  videoFile: File,
  startTime: number,
  endTime: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }

    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const mediaRecorder = new MediaRecorder(canvas.captureStream(), {
        mimeType: 'video/webm;codecs=vp9',
      });
      
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        resolve(blob);
      };
      
      video.currentTime = startTime;
      video.play();
      mediaRecorder.start();
      
      const recordingDuration = (endTime - startTime) * 1000; // ミリ秒に変換
      
      const drawFrame = () => {
        if (video.currentTime >= endTime) {
          mediaRecorder.stop();
          video.pause();
          return;
        }
        
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawFrame);
      };
      
      video.ontimeupdate = drawFrame;
      
      // 安全のため最大録画時間を設定
      setTimeout(() => {
        if (mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
          video.pause();
        }
      }, recordingDuration + 1000);
    };
    
    video.onerror = () => {
      reject(new Error('Video loading failed'));
    };
    
    video.src = URL.createObjectURL(videoFile);
    video.load();
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
