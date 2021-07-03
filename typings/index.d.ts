export declare class Confetti {
    canvas1: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private W;
    private H;
    private mp;
    private deactivationTimerHandler;
    private reactivationTimerHandler;
    private animationHandler;
    private particles;
    private angle;
    private confettiActive;
    private animationComplete;
    private particleColors;
    constructor(canvas: HTMLCanvasElement, color?: ParticleColors);
    GetIsActive(): boolean;
    InitializeConfetti(): void;
    private Draw;
    static RandomFromTo(t: number, i: number): number;
    private Update;
    private CheckForReposition;
    private stepParticle;
    private repositionParticle;
    private StartConfetti;
    ResizeConfetti(): void;
    private ClearTimers;
    DeactivateConfetti(): void;
    private StopConfetti;
    RestartConfetti(): void;
}
export declare class ParticleColors {
    colorOptions: string[];
    private colorIndex;
    private colorIncrementer;
    getColor(): string;
}
export declare class ConfettiParticle {
    x: number;
    y: number;
    r: number;
    d: number;
    private color;
    tilt: number;
    tiltAngleIncremental: number;
    tiltAngle: number;
    constructor(t: string, W: number, H: number, mp: number);
    draw(ctx: CanvasRenderingContext2D): void;
}
