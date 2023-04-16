const Atomize = require('../libs/gif/atomize')
const TextOnAvatar = require('../libs/gif/textOnAvatar')
const Rain = require('../libs/gif/rain')
const Freeze = require('../libs/gif/freeze');
const Multiply = require("../libs/gif/multiply");
const Bomb = require("../libs/gif/bomb");
const Zoom = require("../libs/gif/zoom")
const ZoomOut = require("../libs/gif/zoomOut")



class Main {
    constructor() {
        throw Error(`[ProGIF]: Instantiating of ${this.constructor.name} class failed! Please use static methods of the class '${this.constructor.name}' instead!`)
    }


    
    /**
     * Apply the Atomization effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static async atomize(image) {
        if(!image) {
            throw Error('[ProGIF]: Image parameter is missing!')
        }
        return await Atomize(image)
    
    }
    /**
     * Applies a bomb effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static async bomb(image) {
        if(!image) {
            throw Error('[ProGIF]: Image parameter is missing!')
        }
        return await Bomb(image)
    
    }
    /**
     * Multiplies the image parameter multiple times to form a GIF. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static async multiply(image) {
        if(!image) {
            throw Error('[ProGIF]: Image parameter is missing!')
        }
        return await Multiply(image)
    
    }

    

    /**
     * Puts text on a GIF, likewise a 'meme'.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @param {string} args Text which is displayed on the returned GIF. It is separated by spaces.
     * @param {number} delay Delay between frames.
     * @returns {Promise<Buffer>}
     */
    static async textOnAvatar(image, args, delay = 500) {
        return await TextOnAvatar(image, args, delay)
        
        
    }
    

    /**
     * Applies a rain effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @returns {Promise<Buffer>}
     */

    static async rain(image) {
        if(!image) {
            throw Error(
                '[ProGIF]: Image parameter is missing!'
            )

        }
        return await Rain(image)
    }
    /**
     * 'Freezes' the image. Returns a GIF.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @returns {Promise<Buffer>}
     */
    static async freeze(image) {
        if(!image) {
            throw Error(
                '[ProGIF]: Image parameter is missing!'
            )

        }

        return await Freeze(image)
    }
    /**
     * Applies zoom effect into an image. Returns a GIF.
     * @param  {Buffer|string} image Image to use for manipulation.
     * @param  {number} frames Number of frames resulting in GIF
     * @param  {number} zoomSteps Number of zoom levels to animate
     * @param  {number} delay Delay between frames (optional)
     * @returns {Promise<Buffer>}
     */
    static async zoom(image, frames, zoomSteps, delay = 50) {
        if(!image) {
            throw Error(
                '[ProGIF]: Image parameter is missing!'
            )

        }

        return await Zoom(image, frames, zoomSteps, delay)
    }

    /**
     * Applies an animation of zooming out of an image. Returns a GIF.
     * @param  {Buffer|string} image Image to use for manipulation.
     * @param  {number} numberOfFrames Number of frames resulting in GIF
     * @param  {number} scale Number of zoom levels to animate.
     * @param  {string} background Background (optional)
     * @param  {number} delay Delay between frames (optional)
     * @param  {number} quality Quality of GIF (optional)
     * @returns {Promise<Buffer>}
     */
    static async zoomOut(image, numberOfFrames = 30, scale = 1, background, delay = 30, quality = 10) {
        if(!image) {
            throw Error(
                '[ProGIF]: Image parameter is missing!'
            )

        }

        return await ZoomOut(image, numberOfFrames, scale, background, delay, quality)
    }

}

module.exports = Main;
