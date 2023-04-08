export = Main;
declare class Main {
    /**
     * Apply the Atomization effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static atomize(image: Buffer | string): Promise<Buffer>;
    /**
     * Applies a bomb effect to the image. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static bomb(image: Buffer | string): Promise<Buffer>;
    /**
     * Multiplies the image parameter multiple times to form a GIF. Returns a GIF.
     * @param {Buffer|string} image Image to atomize.
     * @returns {Promise<Buffer>}
     */
    static multiply(image: Buffer | string): Promise<Buffer>;
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
     * @param  {number} frames Number of frames resulting in GIF
     * @param  {number} zoomSteps Number of zoom levels to animate
     * @param  {number} delay Delay between frames (optional)
     * @returns {Promise<Buffer>}
     */
    static zoom(image: Buffer | string, frames: number, zoomSteps: number, delay?: number): Promise<Buffer>;
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
    static zoomOut(image: Buffer | string, numberOfFrames: number, scale: number, background: string, delay?: number, quality?: number): Promise<Buffer>;
}
