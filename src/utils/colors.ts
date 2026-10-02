// Colors picked from images at build time (book spines, playlist tints).
// Every helper returns undefined on failure so callers can fall back to a set color.

async function pixels(imageUrl: string, size: number) {
  const { default: sharp } = await import('sharp');
  const input = Buffer.from(await (await fetch(imageUrl)).arrayBuffer());
  return sharp(input).resize(size, size, { fit: 'cover' }).removeAlpha().raw().toBuffer();
}

/** The color that covers the most of the image, e.g. a book cover's background. */
export async function dominantColor(imageUrl: string) {
  try {
    const data = await pixels(imageUrl, 24);
    // Count coarse color bins (8 levels per channel) and average the busiest one.
    const bins = new Map<number, { n: number; r: number; g: number; b: number }>();
    for (let i = 0; i < data.length; i += 3) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      const key = ((r >> 5) << 6) | ((g >> 5) << 3) | (b >> 5);
      const bin = bins.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
      bin.n++;
      bin.r += r;
      bin.g += g;
      bin.b += b;
      bins.set(key, bin);
    }
    const best = [...bins.values()].reduce((a, b) => (b.n > a.n ? b : a));
    return toHex(best.r / best.n, best.g / best.n, best.b / best.n);
  } catch {
    return undefined;
  }
}

/** The most vibrant color: pixels are grouped by hue and the group with the most
 *  saturated, bright pixels wins (greys and near-blacks are ignored). */
export async function vibrantColor(imageUrl: string) {
  try {
    const data = await pixels(imageUrl, 32);
    const groups = Array.from({ length: 12 }, () => ({ weight: 0, r: 0, g: 0, b: 0 }));
    for (let i = 0; i < data.length; i += 3) {
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const value = max / 255;
      const saturation = max === 0 ? 0 : (max - min) / max;
      if (value < 0.2 || saturation < 0.25) continue;

      const group = groups[Math.floor(hue(r, g, b, max, min) / 30) % 12];
      const w = saturation * value;
      group.weight += w;
      group.r += r * w;
      group.g += g * w;
      group.b += b * w;
    }
    const best = groups.reduce((a, b) => (b.weight > a.weight ? b : a));
    if (best.weight === 0) return undefined;
    return toHex(best.r / best.weight, best.g / best.weight, best.b / best.weight);
  } catch {
    return undefined;
  }
}

/** A color for a book spine: the cover's main color, unless that's a plain
 *  white/grey/black, in which case its most vibrant color reads better. */
export async function spineColor(imageUrl: string) {
  const main = await dominantColor(imageUrl);
  if (main && saturation(main) >= 0.18) return main;
  return (await vibrantColor(imageUrl)) ?? main;
}

function saturation(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const max = Math.max(r, g, b);
  return max === 0 ? 0 : (max - Math.min(r, g, b)) / max;
}

/** Dark or light text, whichever reads better on the given background. */
export function inkFor(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  // Contrast ratios against our dark ink (L≈0.011) and cream (L≈0.9); keep the higher one.
  const onDark = (luminance + 0.05) / (0.011 + 0.05);
  const onLight = (0.9 + 0.05) / (luminance + 0.05);
  return onDark >= onLight ? '#1b1b1a' : '#f7f3ea';
}

function hue(r: number, g: number, b: number, max: number, min: number) {
  const d = max - min;
  if (d === 0) return 0;
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return h * 60;
}

function toHex(r: number, g: number, b: number) {
  return '#' + [r, g, b].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');
}
