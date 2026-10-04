const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function compressLabGLB() {
  const inputPath = path.join(__dirname, '../lab.glb');
  const outputPath = path.join(__dirname, '../public/models/lab.glb');

  console.log('--- COMPRESSING LAB.GLB FOR WEB BROWSER ---');
  const fileBuffer = fs.readFileSync(inputPath);
  console.log(`Original raw size: ${(fileBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB`);

  // Parse GLB Header
  const magic = fileBuffer.readUInt32LE(0);
  const version = fileBuffer.readUInt32LE(4);
  const totalLen = fileBuffer.readUInt32LE(8);
  const jsonLen = fileBuffer.readUInt32LE(12);
  const jsonType = fileBuffer.readUInt32LE(16);

  if (magic !== 0x46546C67) {
    throw new Error('Not a valid GLB file');
  }

  const jsonStr = fileBuffer.toString('utf8', 20, 20 + jsonLen);
  const gltf = JSON.parse(jsonStr);

  const binChunkOffset = 20 + jsonLen;
  const binLen = fileBuffer.readUInt32LE(binChunkOffset);
  const binData = fileBuffer.subarray(binChunkOffset + 8, binChunkOffset + 8 + binLen);

  console.log(`Found ${gltf.images ? gltf.images.length : 0} embedded textures in lab.glb.`);

  // Create mapping of image index -> original bufferView index
  const imageToBv = new Map();
  if (gltf.images) {
    gltf.images.forEach((img, idx) => {
      if (img.bufferView !== undefined) {
        imageToBv.set(idx, img.bufferView);
      }
    });
  }

  const newBufferViews = [];
  let newBinChunks = [];
  let currentOffset = 0;

  for (let bvIdx = 0; bvIdx < gltf.bufferViews.length; bvIdx++) {
    const bv = gltf.bufferViews[bvIdx];
    const rawChunk = binData.subarray(bv.byteOffset, bv.byteOffset + bv.byteLength);

    // Find if this bufferView is used by an image
    let matchingImgIdx = -1;
    for (const [imgIdx, bIndex] of imageToBv.entries()) {
      if (bIndex === bvIdx) {
        matchingImgIdx = imgIdx;
        break;
      }
    }

    if (matchingImgIdx !== -1) {
      try {
        // Compress texture to 512px max JPEG (quality 75)
        const compressedJpeg = await sharp(rawChunk)
          .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true })
          .toBuffer();

        // Update image mimeType in GLTF
        gltf.images[matchingImgIdx].mimeType = 'image/jpeg';

        // Ensure 4-byte alignment
        let padLen = (4 - (compressedJpeg.length % 4)) % 4;
        const paddedChunk = Buffer.concat([compressedJpeg, Buffer.alloc(padLen)]);

        newBufferViews[bvIdx] = {
          buffer: 0,
          byteOffset: currentOffset,
          byteLength: compressedJpeg.length
        };
        newBinChunks.push(paddedChunk);
        currentOffset += paddedChunk.length;
      } catch (err) {
        console.warn(`Could not compress texture ${matchingImgIdx}, preserving raw chunk:`, err.message);
        let padLen = (4 - (rawChunk.length % 4)) % 4;
        const paddedChunk = Buffer.concat([rawChunk, Buffer.alloc(padLen)]);
        newBufferViews[bvIdx] = {
          buffer: 0,
          byteOffset: currentOffset,
          byteLength: rawChunk.length
        };
        newBinChunks.push(paddedChunk);
        currentOffset += paddedChunk.length;
      }
    } else {
      // Geometry / Accessor data
      let padLen = (4 - (rawChunk.length % 4)) % 4;
      const paddedChunk = Buffer.concat([rawChunk, Buffer.alloc(padLen)]);
      newBufferViews[bvIdx] = {
        ...bv,
        byteOffset: currentOffset,
        byteLength: rawChunk.length
      };
      newBinChunks.push(paddedChunk);
      currentOffset += paddedChunk.length;
    }
  }

  gltf.bufferViews = newBufferViews;
  const combinedBin = Buffer.concat(newBinChunks);
  gltf.buffers[0].byteLength = combinedBin.length;

  // Re-encode JSON chunk
  const newJsonStr = JSON.stringify(gltf);
  let newJsonBuffer = Buffer.from(newJsonStr, 'utf8');
  let jsonPadLen = (4 - (newJsonBuffer.length % 4)) % 4;
  if (jsonPadLen > 0) {
    newJsonBuffer = Buffer.concat([newJsonBuffer, Buffer.from(' '.repeat(jsonPadLen), 'utf8')]);
  }

  // Header 20 bytes
  const finalHeader = Buffer.alloc(20);
  const totalGlbSize = 12 + 8 + newJsonBuffer.length + 8 + combinedBin.length;
  finalHeader.writeUInt32LE(0x46546C67, 0); // 'glTF'
  finalHeader.writeUInt32LE(2, 4); // Version 2
  finalHeader.writeUInt32LE(totalGlbSize, 8);
  finalHeader.writeUInt32LE(newJsonBuffer.length, 12);
  finalHeader.writeUInt32LE(0x4E4F534A, 16); // 'JSON'

  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(combinedBin.length, 0);
  binHeader.writeUInt32LE(0x004E4942, 4); // 'BIN\0'

  const finalGLB = Buffer.concat([finalHeader, newJsonBuffer, binHeader, combinedBin]);
  fs.writeFileSync(outputPath, finalGLB);

  console.log(`--- SUCCESS! ---`);
  console.log(`Compressed GLB file size: ${(finalGLB.byteLength / (1024 * 1024)).toFixed(2)} MB`);
}

compressLabGLB().catch(err => {
  console.error('Fatal compression error:', err);
});
