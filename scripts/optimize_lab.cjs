const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeLabGLB() {
  const inputPath = path.join(__dirname, '../lab.glb');
  const outputPath = path.join(__dirname, '../public/models/lab.glb');

  console.log('Reading lab.glb...');
  const fileBuffer = fs.readFileSync(inputPath);
  console.log(`Original file size: ${(fileBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB`);

  const magic = fileBuffer.toString('utf8', 0, 4);
  const jsonLen = fileBuffer.readUInt32LE(12);

  if (magic !== 'glTF') {
    throw new Error('Not a valid GLB file');
  }

  const jsonStr = fileBuffer.toString('utf8', 20, 20 + jsonLen);
  const gltf = JSON.parse(jsonStr);

  const binChunkOffset = 20 + jsonLen;
  const binLen = fileBuffer.readUInt32LE(binChunkOffset);
  const binData = fileBuffer.subarray(binChunkOffset + 8, binChunkOffset + 8 + binLen);

  console.log(`Found ${gltf.images ? gltf.images.length : 0} embedded images.`);

  let newBinChunks = [];
  let currentOffset = 0;

  const newBufferViews = [];
  const imageBufferViewIndices = new Set(gltf.images ? gltf.images.map(img => img.bufferView) : []);

  for (let i = 0; i < gltf.bufferViews.length; i++) {
    const bv = gltf.bufferViews[i];
    const chunk = binData.subarray(bv.byteOffset, bv.byteOffset + bv.byteLength);

    if (imageBufferViewIndices.has(i)) {
      const imgIdx = gltf.images.findIndex(img => img.bufferView === i);
      try {
        const compressedImage = await sharp(chunk)
          .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 75 })
          .toBuffer();

        gltf.images[imgIdx].mimeType = 'image/jpeg';
        
        let padLen = (4 - (compressedImage.length % 4)) % 4;
        const paddedChunk = Buffer.concat([compressedImage, Buffer.alloc(padLen)]);

        newBufferViews[i] = {
          buffer: 0,
          byteOffset: currentOffset,
          byteLength: compressedImage.length
        };
        newBinChunks.push(paddedChunk);
        currentOffset += paddedChunk.length;
      } catch (err) {
        let padLen = (4 - (chunk.length % 4)) % 4;
        const paddedChunk = Buffer.concat([chunk, Buffer.alloc(padLen)]);
        newBufferViews[i] = {
          buffer: 0,
          byteOffset: currentOffset,
          byteLength: chunk.length
        };
        newBinChunks.push(paddedChunk);
        currentOffset += paddedChunk.length;
      }
    } else {
      let padLen = (4 - (chunk.length % 4)) % 4;
      const paddedChunk = Buffer.concat([chunk, Buffer.alloc(padLen)]);
      newBufferViews[i] = {
        ...bv,
        byteOffset: currentOffset,
        byteLength: chunk.length
      };
      newBinChunks.push(paddedChunk);
      currentOffset += paddedChunk.length;
    }
  }

  gltf.bufferViews = newBufferViews;
  const combinedBin = Buffer.concat(newBinChunks);
  gltf.buffers[0].byteLength = combinedBin.length;

  const newJsonStr = JSON.stringify(gltf);
  let newJsonBuffer = Buffer.from(newJsonStr, 'utf8');
  let jsonPadLen = (4 - (newJsonBuffer.length % 4)) % 4;
  if (jsonPadLen > 0) {
    newJsonBuffer = Buffer.concat([newJsonBuffer, Buffer.from(' '.repeat(jsonPadLen), 'utf8')]);
  }

  const finalHeader = Buffer.alloc(20);
  const totalGlbSize = 12 + 8 + newJsonBuffer.length + 8 + combinedBin.length;
  finalHeader.writeUInt32LE(0x46546c67, 0);
  finalHeader.writeUInt32LE(2, 4);
  finalHeader.writeUInt32LE(totalGlbSize, 8);
  finalHeader.writeUInt32LE(newJsonBuffer.length, 12);
  finalHeader.writeUInt32LE(0x4E4F534A, 16);

  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(combinedBin.length, 0);
  binHeader.writeUInt32LE(0x004E4942, 4);

  const finalGLB = Buffer.concat([finalHeader, newJsonBuffer, binHeader, combinedBin]);
  fs.writeFileSync(outputPath, finalGLB);

  console.log(`Successfully optimized lab.glb!`);
  console.log(`New file size: ${(finalGLB.byteLength / (1024 * 1024)).toFixed(2)} MB`);
}

optimizeLabGLB().catch(err => {
  console.error('Error optimizing lab.glb:', err);
});
