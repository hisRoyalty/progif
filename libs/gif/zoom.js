const Canvas = require('canvas');
const GIFEncoder = require('gifencoder');

module.exports = async (img, frames, zoomSteps, delay = 50)  => {
  const image = await Canvas.loadImage(img);
  const canvas = Canvas.createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  const encoder = new GIFEncoder(image.width, image.height);
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(delay);

  const zoomFactors = [];
  for (let i = 0; i < frames; i++) {
    const zoomFactor = 1 + (i + 1) / zoomSteps;
    zoomFactors.push(zoomFactor);
  }

  for (let i = 0; i < frames; i++) {
    const zoomFactor = zoomFactors[i];
    const offsetX = (canvas.width - image.width * zoomFactor) / 2;
    const offsetY = (canvas.height - image.height * zoomFactor) / 2;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      image,
      offsetX,
      offsetY,
      image.width * zoomFactor,
      image.height * zoomFactor
    );
    ctx.filter = `blur(${(frames - i) / frames * 20}px)`;
    encoder.addFrame(ctx);
  }

  // Finish the GIF encoding
  encoder.finish();
  return encoder.out.getData();
}