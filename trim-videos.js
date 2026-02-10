import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

const videos = [
    'images/001 Chamundi Hill Palace Final.mp4',
    'images/002 Aerial.mp4',
    'images/003 Treatment.mp4',
    'images/004 Rooms.mp4'
];

async function getVideoDuration(videoPath) {
    const cmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${videoPath}"`;
    try {
        const { stdout } = await execPromise(cmd);
        return parseFloat(stdout.trim());
    } catch (error) {
        console.error(`Error getting duration for ${videoPath}:`, error.message);
        throw error;
    }
}

async function trimVideo(inputPath, outputPath, duration) {
    const trimmedDuration = duration - 10;
    const cmd = `ffmpeg -i "${inputPath}" -t ${trimmedDuration} -c copy "${outputPath}"`;

    console.log(`Trimming ${path.basename(inputPath)}...`);
    try {
        await execPromise(cmd);
        console.log(`✓ Successfully trimmed ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`✗ Error trimming ${path.basename(inputPath)}:`, error.message);
        throw error;
    }
}

async function processAllVideos() {
    console.log('Starting video trimming process...\n');

    for (const video of videos) {
        try {
            const duration = await getVideoDuration(video);
            console.log(`${path.basename(video)} duration: ${duration.toFixed(2)}s`);

            if (duration <= 10) {
                console.log(`⚠ Skipping ${path.basename(video)} - video is 10 seconds or shorter\n`);
                continue;
            }

            const outputPath = video.replace('.mp4', '_trimmed.mp4');
            await trimVideo(video, outputPath, duration);
            console.log('');
        } catch (error) {
            console.error(`Failed to process ${video}\n`);
        }
    }

    console.log('All videos processed!');
}

processAllVideos().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
