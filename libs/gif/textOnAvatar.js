const GIFEncoder = require('gifencoder');
const Canvas = require('canvas');


module.exports = async(image, args, delay = 500) => {
    const encoder = new GIFEncoder(150, 150);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(delay);
    encoder.setQuality(10);
    
    const canvas = Canvas.createCanvas(150, 150);
    const context = canvas.getContext('2d');
    if (args.length < '2') throw Error ('[ProGIF]: Provided text should be more than one word!')
    const avatar = await Canvas.loadImage(image);
    await args.forEach(async (content) => {
            context.drawImage(avatar, 0, 0, 150, 150);
            context.textAlign = 'center';
            context.font = '30px Impact';
            context.fillStyle = `#ffffff`;
            context.fillText(content, 75, 140, 150);
            encoder.addFrame(context)
    })
        encoder.finish()
        return encoder.out.getData();
    }