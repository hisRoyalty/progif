const Atomize = require('../libs/gif/atomize')
const TextOnAvatar = require('../libs/gif/textOnAvatar')
const Rain = require('../libs/gif/rain')
const Freeze = require('../libs/gif/freeze');
const Multiply = require("../libs/gif/multiply");
const Bomb = require("../libs/gif/bomb");


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
     * @returns {Promise<Buffer>}
     */
    static async textOnAvatar(image, args) {
        return await TextOnAvatar(image, args)
        
        
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
}

module.exports = Main;
