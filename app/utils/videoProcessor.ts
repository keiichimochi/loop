import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

let ffmpeg: FFmpeg | null = null;

export async function initializeFFmpeg(): Promise<FFmpeg> {
  if (ffmpeg) return ffmpeg;

  ffmpeg = new FFmpeg();
  
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
  
  ffmpeg.on('log', ({ message }) => {
    console.log(message);
  });

  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  return ffmpeg;
}

export interface TrimOptions {
  startTime: number;
  endTime: number;
  outputFormat?: 'mp4' | 'webm' | 'gif';
  quality?: 'high' | 'medium' | 'low';
}

export async function trimVideo(
  file: File,
  options: TrimOptions
): Promise<Blob> {
  const ffmpeg = await initializeFFmpeg();
  
  const inputFileName = 'input.mp4';
  const outputFileName = `output.${options.outputFormat || 'mp4'}`;
  
  // ファイルをFFmpegに書き込み
  await ffmpeg.writeFile(inputFileName, await fetchFile(file));
  
  // トリミングコマンドを構築
  const duration = options.endTime - options.startTime;
  let command = [
    '-i', inputFileName,
    '-ss', options.startTime.toString(),
    '-t', duration.toString(),
    '-c:v', 'libx264',
    '-c:a', 'aac',
  ];

  // 品質設定
  if (options.quality === 'high') {
    command.push('-crf', '18');
  } else if (options.quality === 'medium') {
    command.push('-crf', '23');
  } else {
    command.push('-crf', '28');
  }

  // GIF変換の場合
  if (options.outputFormat === 'gif') {
    command = [
      '-i', inputFileName,
      '-ss', options.startTime.toString(),
      '-t', duration.toString(),
      '-vf', 'fps=15,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
      '-loop', '0',
    ];
  }

  command.push(outputFileName);

  // FFmpegでトリミング実行
  await ffmpeg.exec(command);
  
  // 出力ファイルを読み取り
  const data = await ffmpeg.readFile(outputFileName);
  
  // ファイルを削除
  await ffmpeg.deleteFile(inputFileName);
  await ffmpeg.deleteFile(outputFileName);
  
  // Blobを作成
  const mimeType = options.outputFormat === 'gif' 
    ? 'image/gif' 
    : options.outputFormat === 'webm' 
    ? 'video/webm' 
    : 'video/mp4';
    
  return new Blob([data], { type: mimeType });
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
