const GIFEncoder = require('gifencoder');
const Canvas = require('canvas');

module.exports = async (image, numberOfFrames = 30, scale = 1, background, delay = 30, quality = 10) => {

  const img = await Canvas.loadImage(image);
  const encoder = new GIFEncoder(img.width, img.height);
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(delay);
  encoder.setQuality(quality);
  const canvas = Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  const scaleStep = scale / numberOfFrames;
  
  for (let i = 0; i < numberOfFrames; i++) {
    const scale = 1 - i * scaleStep;
    const scaleWidth = img.width * scale;
    const scaleHeight = img.height * scale;
    const xOffset = (img.width - scaleWidth) / 2;
    const yOffset = (img.height - scaleHeight) / 2;
    if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(img, xOffset, yOffset, scaleWidth, scaleHeight);
    encoder.addFrame(ctx);
  }

  encoder.finish();
  return encoder.out.getData();
};
