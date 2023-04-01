export = Main;
declare class Main {
    /**
     * Apply the Atomization effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static atomize(image: Buffer | string): Promise<Buffer>;
    /**
     * Puts text on a GIF, likewise a 'meme'.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @param {string} args Text which is displayed on the returned GIF. It is separated by spaces.
     * @returns {Promise<Buffer>}
     */
    static textOnAvatar(image: Buffer | string, args: string): Promise<Buffer>;

    /**
     * Applies a rain effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @returns {Promise<Buffer>}
     */
    
    static rain(image: Buffer | string): Promise<Buffer>;
    /**
     * 'Freezes' the image. Returns a GIF.
     * @param {Buffer|string} image Image to use for the manipulation.
     * @returns {Promise<Buffer>}
     */
    static freeze(image: Buffer | string): Promise<Buffer>;


    /**
     * Applies zoom effect into an image. Returns a GIF.
     * @param  {Buffer|string} image Image to use for manipulation.
     * @param  {Number} frames Number of frames resulting in GIF
     * @param  {Number} zoomSteps Number of zoom levels to animate.
     * @returns {Promise<Buffer>}
     */
    static zoom(image: Buffer | string, frames: Number, zoomSteps: Number): Promise<Buffer>;



}
