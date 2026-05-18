/**
 * Build TWO transparent horizontal logo lockups:
 *
 *   kf-pdc-horizontal-dark.png  — dark text on transparent (for header / cream surfaces)
 *   kf-pdc-horizontal-light.png — white text on transparent (for dark footer)
 *
 * Layout: [ Purpose Driven Consulting + swoosh + tagline ] | [ KF circle + KINGDOM FACTOR ]
 *
 * - DARK version: combine pdc-logo.png (dark navy text on white) and kf-logo.png (dark text + KF mark
 *   on white, with a burgundy decorative shape we knock out).
 * - LIGHT version: extract from kf-pdc-logo.png (white text on navy), knock out navy.
 */
const sharp = require("sharp");
const path = require("path");

const BRAND = path.join(__dirname, "..", "public", "images", "brand");

const COMMON_HEIGHT = 220;
const GAP = 70;
const SIDE_PAD = 30;
const TOP_BOTTOM_PAD = 12;

// ------ flood-fill background knockout ------
function makeFloodFill(predicate) {
  return async function (srcBuf) {
    const { data, info } = await sharp(srcBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;
    const out = Buffer.from(data);
    const visited = new Uint8Array(width * height);
    const queue = [];
    const enqueueIfBg = (x, y) => {
      if (x < 0 || y < 0 || x >= width || y >= height) return;
      const idx = y * width + x;
      if (visited[idx]) return;
      const i = idx * channels;
      if (predicate(data[i], data[i + 1], data[i + 2], data[i + 3])) {
        visited[idx] = 1;
        queue.push(idx);
      }
    };
    for (let x = 0; x < width; x++) { enqueueIfBg(x, 0); enqueueIfBg(x, height - 1); }
    for (let y = 0; y < height; y++) { enqueueIfBg(0, y); enqueueIfBg(width - 1, y); }
    let head = 0;
    while (head < queue.length) {
      const idx = queue[head++];
      const y = Math.floor(idx / width);
      const x = idx - y * width;
      out[idx * channels + 3] = 0;
      enqueueIfBg(x - 1, y); enqueueIfBg(x + 1, y); enqueueIfBg(x, y - 1); enqueueIfBg(x, y + 1);
    }
    return sharp(out, { raw: { width, height, channels } }).png().toBuffer();
  };
}

// Near-white knockout (R,G,B all >= 235)
const knockoutWhite = makeFloodFill((r, g, b) => r >= 235 && g >= 235 && b >= 235);
// Navy knockout (matches the deep ~#021941 background of kf-pdc-logo.png)
const knockoutNavy = makeFloodFill((r, g, b) => Math.abs(r - 2) <= 60 && Math.abs(g - 25) <= 60 && Math.abs(b - 65) <= 60 && b > Math.max(r, g));

// Direct-color knockout (no flood fill, no connectivity): zero alpha on any pixel matching the
// predicate. Use for interior color blobs not connected to edges. Predicate receives (r,g,b,a,x,y).
async function directKnockout(srcBuf, predicate) {
  const { data, info } = await sharp(srcBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (predicate(out[i], out[i + 1], out[i + 2], out[i + 3], x, y, width, height)) {
        out[i + 3] = 0;
      }
    }
  }
  return sharp(out, { raw: { width, height, channels } }).png().toBuffer();
}

// Dark burgundy decorative-shape match — only applied to the LEFT ~17% of the image where the
// decorative shape lives. The KF circle starts around x ≈ 88 / 426 = 20%, so a 17% bound leaves
// it untouched. Within that region, any pixel with even slight red tint is shape residue.
function isLeftBurgundy(r, g, b, a, x, y, w) {
  if (x > w * 0.17) return false;
  // Catch anything with a reddish tint — the only red-tinted content in this strip is the
  // decorative shape and its anti-aliased edges.
  return r > g + 3 && r > b + 3;
}

// ------ composite halves into a final lockup ------
async function composeLockup({ pdcBuf, kfBuf, dividerColor, outPath, label }) {
  const pdcResized = await sharp(pdcBuf).resize({ height: COMMON_HEIGHT, fit: "inside" }).png().toBuffer();
  const kfResized = await sharp(kfBuf).resize({ height: COMMON_HEIGHT, fit: "inside" }).png().toBuffer();
  const pdcMeta = await sharp(pdcResized).metadata();
  const kfMeta = await sharp(kfResized).metadata();
  const canvasW = SIDE_PAD + pdcMeta.width + GAP + kfMeta.width + SIDE_PAD;
  const canvasH = COMMON_HEIGHT + TOP_BOTTOM_PAD * 2;
  const dividerW = 2;
  const dividerH = Math.round(COMMON_HEIGHT * 0.62);
  const divider = await sharp({
    create: { width: dividerW, height: dividerH, channels: 4, background: dividerColor },
  }).png().toBuffer();
  const yTop = TOP_BOTTOM_PAD;
  const dividerX = SIDE_PAD + pdcMeta.width + Math.round(GAP / 2) - Math.round(dividerW / 2);
  const dividerY = Math.round((canvasH - dividerH) / 2);
  await sharp({
    create: { width: canvasW, height: canvasH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      { input: pdcResized, left: SIDE_PAD, top: yTop },
      { input: divider, left: dividerX, top: dividerY },
      { input: kfResized, left: SIDE_PAD + pdcMeta.width + GAP, top: yTop },
    ])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log(`Wrote ${label}: ${outPath} (${canvasW}x${canvasH})`);
}

(async () => {
  // ------ DARK version: dark text + colored marks, for cream/light surfaces ------
  const pdcDarkRaw = await sharp(path.join(BRAND, "pdc-logo.png")).toBuffer();
  const pdcDark = await knockoutWhite(pdcDarkRaw);
  const pdcDarkTrim = await sharp(pdcDark).trim({ threshold: 1 }).png().toBuffer();

  const kfDarkRaw = await sharp(path.join(BRAND, "kf-logo.png")).toBuffer();
  // Pass 1: knock out the surrounding white (edge-connected)
  const kfDarkStep1 = await knockoutWhite(kfDarkRaw);
  // Pass 2: knock out the interior burgundy decorative shape (color match, not connectivity-based)
  const kfDarkStep2 = await directKnockout(kfDarkStep1, isLeftBurgundy);
  const kfDarkTrim = await sharp(kfDarkStep2).trim({ threshold: 1 }).png().toBuffer();

  await composeLockup({
    pdcBuf: pdcDarkTrim,
    kfBuf: kfDarkTrim,
    dividerColor: { r: 100, g: 31, b: 36, alpha: 0.34 }, // burgundy at low opacity
    outPath: path.join(BRAND, "kf-pdc-horizontal-dark.png"),
    label: "DARK",
  });

  // ------ LIGHT version: white text + colored marks, for dark surfaces ------
  const fullRaw = await sharp(path.join(BRAND, "kf-pdc-logo.png")).toBuffer();
  const fullCleaned = await knockoutNavy(fullRaw);
  const meta = await sharp(fullCleaned).metadata();
  const splitY = Math.floor(meta.height / 2);
  const kfLightRaw = await sharp(fullCleaned).extract({ left: 0, top: 0, width: meta.width, height: splitY }).png().toBuffer();
  const pdcLightRaw = await sharp(fullCleaned).extract({ left: 0, top: splitY, width: meta.width, height: meta.height - splitY }).png().toBuffer();
  const kfLight = await sharp(kfLightRaw).trim({ threshold: 1 }).png().toBuffer();
  const pdcLight = await sharp(pdcLightRaw).trim({ threshold: 1 }).png().toBuffer();

  await composeLockup({
    pdcBuf: pdcLight,
    kfBuf: kfLight,
    dividerColor: { r: 247, g: 240, b: 229, alpha: 0.34 }, // cream at low opacity
    outPath: path.join(BRAND, "kf-pdc-horizontal-light.png"),
    label: "LIGHT",
  });
})().catch((e) => { console.error(e); process.exit(1); });
