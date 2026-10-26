import fs from "fs";
import path from "path";
import zlib from "zlib";

function createPNG(width, height, getPixel) {
  // RGB raw buffer with filter byte 0 at start of each line
  const rowSize = 1 + width * 3;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const [r, g, b] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 3;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
      }
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, "ascii");
    const crcBuf = Buffer.alloc(4);
    const typeAndData = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([len, typeAndData, crcBuf]);
  }

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk: 13 bytes
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: 2 (RGB)
  ihdr[10] = 0; // compression method
  ihdr[11] = 0; // filter method
  ihdr[12] = 0; // interlace method

  const ihdrChunk = makeChunk("IHDR", ihdr);
  const idatChunk = makeChunk("IDAT", compressed);
  const iendChunk = makeChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const width = 256;
const height = 256;
const logosDir = path.resolve("./public/logos");

// 1. GMIT PNG (Emerald + Deep Navy + Gold emblem)
const gmitPng = createPNG(width, height, (x, y, w, h) => {
  const dx = x - w / 2;
  const dy = y - h / 2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > 115) return [10, 25, 47]; // Midnight blue bg
  if (dist > 108 && dist <= 114) return [234, 179, 8]; // Golden ring
  if (dist > 102 && dist <= 107) return [34, 197, 94]; // Emerald ring
  if (dist <= 102 && dist > 85) return [15, 23, 42]; // Dark fill
  if (dist <= 85 && dist > 80) return [234, 179, 8]; // Inner gold
  if (dist <= 40) return [34, 197, 94]; // Center core
  return [20, 35, 60];
});

// 2. KITS PNG (Cyber Blue + Neon Lime Tech Nodes)
const kitsPng = createPNG(width, height, (x, y, w, h) => {
  const dx = Math.abs(x - w / 2);
  const dy = Math.abs(y - h / 2);
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > 115) return [3, 27, 38]; // Deep teal
  if (dist > 108 && dist <= 114) return [56, 189, 248]; // Cyan border
  if (dx + dy < 50) return [56, 189, 248]; // Diamond center
  if (dist > 80 && dist <= 86) return [74, 222, 128]; // Lime ring
  return [7, 32, 46];
});

// 3. Karnataka PNG (Royal Gold + Crimson)
const karPng = createPNG(width, height, (x, y, w, h) => {
  const dx = x - w / 2;
  const dy = y - h / 2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > 115) return [24, 14, 4]; // Dark bronze
  if (dist > 108 && dist <= 114) return [234, 179, 8]; // Gold ring
  if (dist > 103 && dist <= 107) return [220, 38, 38]; // Crimson ring
  if (dist <= 45) return [234, 179, 8]; // Central gold
  return [32, 18, 5];
});

fs.writeFileSync(path.join(logosDir, "gmit.png"), gmitPng);
fs.writeFileSync(path.join(logosDir, "kits.png"), kitsPng);
fs.writeFileSync(path.join(logosDir, "karnataka.png"), karPng);

console.log("Valid PNG logos written successfully!");
