import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

// 1. configuration
const inputDir = './public/images'; // Where your current images are
const outputDir = './public/images/optimized'; // Where optimized images will go
const quality = 80; // Quality (1-100). 80 is a sweet spot for web.

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
    if (err) return console.error('Could not list the directory.', err);

    files.forEach((file) => {
        const filePath = path.join(inputDir, file);
        const fileName = path.parse(file).name;
        const fileExt = path.parse(file).ext.toLowerCase();

        // Only process images
        if (['.webp', '.jpeg', '.png'].includes(fileExt)) {
            console.log(`⚡ Compressing: ${file}...`);

            sharp(filePath)
                .webp({ quality: quality }) // Convert to WebP
                .toFile(path.join(outputDir, `${fileName}.webp`))
                .then(() => console.log(`✅ Done: ${fileName}.webp`))
                .catch(err => console.error(`❌ Error with ${file}:`, err));
        }
    });
});