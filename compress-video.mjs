import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import path from 'node:path';

// Set the path explicitly
ffmpeg.setFfmpegPath(ffmpegPath);

// Define paths (path.resolve works relative to where you run the command)
const inputFile = path.resolve('public/Aerial.mp4');
const outputFile = path.resolve('public/Aerial_optimized.webm');

console.log(`🎬 Compressing video to WebM...`);
console.log(`   Input: ${inputFile}`);

ffmpeg(inputFile)
  .noAudio()
  .size('1920x?')
  .videoCodec('libvpx-vp9')
  .outputOptions([
    '-crf 55',
    '-b:v 0',
    '-deadline good',
    '-cpu-used 2'
  ])
  .on('end', () => {
    console.log(`✅ Success! Created: Aerial_optimized.webm`);
  })
  .on('error', (err) => {
    console.error('❌ Error occurred:', err);
  })
  .save(outputFile);