const fs = require('fs');
const path = require('path');
const { NodeIO } = require('@gltf-transform/core');
const { dedup, prune } = require('@gltf-transform/functions');
const sharp = require('sharp');

async function processLabGLB() {
  const inputPath = path.join(__dirname, '../lab.glb');
  const outputPath = path.join(__dirname, '../public/models/lab.glb');

  console.log('Reading lab.glb via glTF-Transform SDK for ultra-fast web delivery...');
  const io = new NodeIO();
  const document = await io.read(inputPath);

  const textures = document.getRoot().listTextures();
  console.log(`Found ${textures.length} textures.`);

  for (let i = 0; i < textures.length; i++) {
    const texture = textures[i];
    const rawImage = texture.getImage();
    if (!rawImage || rawImage.length === 0) continue;

    try {
      const resizedJpeg = await sharp(Buffer.from(rawImage))
        .resize(384, 384, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 70 })
        .toBuffer();

      texture.setImage(new Uint8Array(resizedJpeg));
      texture.setMimeType('image/jpeg');
    } catch (err) {
      console.warn(`Texture ${i} compression warning:`, err.message);
    }
  }

  await document.transform(
    dedup(),
    prune()
  );

  console.log('Writing ultra-fast GLB file...');
  const glbBuffer = await io.writeBinary(document);
  fs.writeFileSync(outputPath, Buffer.from(glbBuffer));

  console.log(`--- SUCCESS! ---`);
  console.log(`Ultra-fast GLB file size: ${(glbBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB`);
}

processLabGLB().catch(err => {
  console.error('Fatal optimization error:', err);
});
