const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/generated';
const files = ['advisory-room','marketplace-ministry','collective-studio','leadership-table'];

(async () => {
  const out = [];
  for (const name of files) {
    const input = path.join(dir, `${name}.webp`);
    const meta = await sharp(input).metadata();
    const desktopPath = path.join(dir, `${name}-1440.webp`);
    const mobilePath = path.join(dir, `${name}-mobile.webp`);
    await sharp(input)
      .resize({ width: 1440, height: 960, fit: 'cover', position: 'center' })
      .webp({ quality: 68, effort: 4 })
      .toFile(desktopPath);
    await sharp(input)
      .resize({ width: 900, height: 1200, fit: 'cover', position: 'center' })
      .webp({ quality: 68, effort: 4 })
      .toFile(mobilePath);
    out.push({
      name,
      source: { width: meta.width, height: meta.height, bytes: fs.statSync(input).size },
      desktop: fs.statSync(desktopPath).size,
      mobile: fs.statSync(mobilePath).size,
    });
  }
  console.log(JSON.stringify(out, null, 2));
})().catch((err) => { console.error(err); process.exit(1); });
