import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegPath);

const PUBLIC_DIR = path.resolve('public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images/optimized');

async function optimizeImages() {
    console.log('🖼️  Scanning images...');

    if (!fs.existsSync(IMAGES_DIR)) {
        console.log('⚠️  Images directory not found:', IMAGES_DIR);
        return;
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${files.length} images to process.`);

    for (const file of files) {
        const inputPath = path.join(IMAGES_DIR, file);
        const outputPath = path.join(IMAGES_DIR, `${path.parse(file).name}.webp`);

        if (fs.existsSync(outputPath)) {
            console.log(`⏩ Skipping ${file} (WebP already exists)`);
            continue;
        }

        try {
            const metadata = await sharp(inputPath).metadata();

            console.log(`Processing ${file} (${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB)...`);

            await sharp(inputPath)
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80, effort: 4 }) // balanced compression/speed
                .toFile(outputPath);

            const newSize = fs.statSync(outputPath).size;
            console.log(`✅ Optimized: ${path.basename(outputPath)} (${(newSize / 1024 / 1024).toFixed(2)} MB)`);
        } catch (err) {
            console.error(`❌ Error processing ${file}:`, err.message);
        }
    }
}

async function optimizeVideos() {
    console.log('\n🎥 Scanning videos...');

    const files = fs.readdirSync(PUBLIC_DIR).filter(file => /\.(mp4|mov)$/i.test(file));

    console.log(`Found ${files.length} videos to process.`);

    for (const file of files) {
        const inputPath = path.join(PUBLIC_DIR, file);
        const outputPathWebM = path.join(PUBLIC_DIR, `${path.parse(file).name}.webm`);
        const outputPathMp4 = path.join(PUBLIC_DIR, `${path.parse(file).name}_optimized.mp4`);

        // WebM Generation
        if (!fs.existsSync(outputPathWebM)) {
            console.log(`Processing ${file} -> WebM...`);
            await new Promise((resolve, reject) => {
                ffmpeg(inputPath)
                    .noAudio()
                    .size('1920x?')
                    .videoCodec('libvpx-vp9')
                    .outputOptions([
                        '-crf 40', // Slightly higher CRF for smaller size
                        '-b:v 0',
                        '-deadline good',
                        '-cpu-used 2'
                    ])
                    .on('end', resolve)
                    .on('error', reject)
                    .save(outputPathWebM);
            }).then(() => console.log(`✅ Created: ${path.basename(outputPathWebM)}`))
                .catch(err => console.error(`❌ Error creating WebM for ${file}:`, err));
        } else {
            console.log(`⏩ Skipping ${file} -> WebM (exists)`);
        }

        // MP4 Optimization (H.264)
        if (!fs.existsSync(outputPathMp4)) {
            console.log(`Processing ${file} -> MP4 Optimized...`);
            await new Promise((resolve, reject) => {
                ffmpeg(inputPath)
                    .noAudio() // Assuming background video doesn't need audio
                    .size('1920x?')
                    .videoCodec('libx264')
                    .outputOptions([
                        '-crf 28',
                        '-preset fast',
                        '-movflags +faststart'
                    ])
                    .on('end', resolve)
                    .on('error', reject)
                    .save(outputPathMp4);
            }).then(() => console.log(`✅ Created: ${path.basename(outputPathMp4)}`))
                .catch(err => console.error(`❌ Error optimizing MP4 for ${file}:`, err));
        } else {
            console.log(`⏩ Skipping ${file} -> MP4 Optimized (exists)`);
        }
    }
}

(async () => {
    try {
        await optimizeImages();
        await optimizeVideos();
        console.log('\n🎉 Optimization complete!');
    } catch (err) {
        console.error('Fatal error:', err);
    }
})();
