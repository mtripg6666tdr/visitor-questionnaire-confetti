declare global {
    interface Window {
        requestAnimFrame: any;
        mozRequestAnimationFrame: any;
        oRequestAnimationFrame: any;
        msRequestAnimationFrame: any;
    }
}
export {};
