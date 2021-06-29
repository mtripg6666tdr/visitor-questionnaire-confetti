export class Confetti {
  canvas1:HTMLCanvasElement;
  ctx:CanvasRenderingContext2D;
  private W:number;
  private H:number;
  private mp = screen.width >= 988 ? 150 : 75;
  private deactivationTimerHandler:any;
  private reactivationTimerHandler:any;
  private animationHandler:any;
  private particles = [] as ConfettiParticle[];
  private angle = 0;
  private tiltAngle = 0;
  private confettiActive = true;
  private animationComplete = true;
  private particleColors = null as ParticleColors;
  
  constructor(canvas:HTMLCanvasElement, color?:ParticleColors){
    if(!canvas) throw new Error("Argument canvas is necessary to instantiate Confetti");
    this.canvas1 = canvas;
    this.ctx = this.canvas1.getContext("2d");
    this.particleColors = color ?? new ParticleColors();

    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t:any) {
        return window.setTimeout(t, 1e3 / 60);
    }
  }

  InitializeConfetti() {
    this.ResizeConfetti();
    this.particles = [],
    this.animationComplete = false;
    for (var t = 0; t < this.mp; t++) {
      var i = this.particleColors.getColor();
      this.particles.push(new ConfettiParticle(i, this.W, this.H, this.mp));
    }
    this.StartConfetti();
  }
  private Draw() {
    this.ctx.clearRect(0, 0, this.W, this.H);
    var i = [];
    for (var n = 0; n < this.mp; n++){
        i.push(this.particles[n].draw(this.ctx));
    }
    this.Update();
    return i
  }
  static RandomFromTo(t:number, i:number) {
    return Math.floor(Math.random() * (i - t + 1) + t)
  }
  private Update() {
    var t = null as ConfettiParticle;
    var i = 0;
    this.angle += .01;
    this.tiltAngle += .1;
    for (var n = 0; n < this.mp; n++) {
      if (t = this.particles[n], this.animationComplete) return;
      if(!this.confettiActive && t.y < -15){
        t.y = this.H + 100
      } else {
        this.stepParticle(t, n);
        if(t.y <= this.H){
          i++;
        }
        this.CheckForReposition(t, n);
      }
    }
    if(i === 0){
        this.StopConfetti()
    }
  }
  private CheckForReposition(t:ConfettiParticle, i:number) {
    if((t.x > this.W + 20 || t.x < -20 || t.y > this.H) && this.confettiActive){
      if(i % 5 > 0 || i % 2 == 0){
        this.repositionParticle(t, Math.random() * this.W, -10, Math.floor(10 * Math.random()) - 10);
      }else{
        if(Math.sin(this.angle) > 0){
          this.repositionParticle(t, -5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10);
        }else{
          this.repositionParticle(t, this.W + 5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10);
        }
      }
    }
  }
  private stepParticle(t:ConfettiParticle, i:number) {
      t.tiltAngle += t.tiltAngleIncremental,
      t.y += (Math.cos(this.angle + t.d) + 3 + t.r / 2) / 2,
      t.x += Math.sin(this.angle),
      t.tilt = 15 * Math.sin(t.tiltAngle - i / 3)
  }
  private repositionParticle(t:ConfettiParticle, i:number, n:number, e:number) {
      t.x = i,
      t.y = n,
      t.tilt = e
  }
  private StartConfetti() {
      this.ResizeConfetti();
      const t = (()=>{
          if(!this.animationComplete){
            console.log("aa");
            this.animationHandler = window.requestAnimFrame(t);
            this.Draw();
          }
      });
      t();
  }
  ResizeConfetti(){
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas1.width = this.W;
    this.canvas1.height = this.H;
  }
  private ClearTimers() {
      clearTimeout(this.reactivationTimerHandler),
      clearTimeout(this.animationHandler)
  }
  DeactivateConfetti() {
      this.confettiActive = false,
      this.ClearTimers()
  }
  private StopConfetti() {
      this.animationComplete = !0,
      null != this.ctx && this.ctx.clearRect(0, 0, this.W, this.H)
  }
  RestartConfetti() {
    this.ClearTimers(),
    this.StopConfetti(),
    this.reactivationTimerHandler = setTimeout(function() {
      this.confettiActive = !0,
      this.animationComplete = !1,
      this.InitializeConfetti()
    }, 100);
  }
}

export class ParticleColors {
  colorOptions = [
    "DodgerBlue", 
    "OliveDrab", 
    "Gold", 
    "pink", 
    "SlateBlue", 
    "lightblue", 
    "Violet", 
    "PaleGreen", 
    "SteelBlue", 
    "SandyBrown", 
    "Chocolate", 
    "Crimson"
  ] as string[];
  private colorIndex = 0;
  private colorIncrementer = 0;
  getColor(){
      if(this.colorIncrementer >= 10){
        this.colorIncrementer = 0;
        this.colorIndex++;
        if(this.colorIndex >= this.colorOptions.length){
          this.colorIndex = 0;
        }
      }
      this.colorIncrementer++;
      return this.colorOptions[this.colorIndex];
  }
}

export class ConfettiParticle{
  x:number;
  y:number;
  r:number;
  d:number;
  private color:string;
  tilt:number;
  tiltAngleIncremental:number;
  tiltAngle:number;
  constructor(t:string, W:number, H:number, mp:number){
    this.x = Math.random() * W;
    this.y = Math.random() * H - H;
    this.r = Confetti.RandomFromTo(10, 30);
    this.d = Math.random() * mp + 10;
    this.color = t;
    this.tilt = Math.floor(10 * Math.random()) - 10;
    this.tiltAngleIncremental = .07 * Math.random() + .05;
    this.tiltAngle = 0;
  }

  draw(ctx:CanvasRenderingContext2D) {
    return ctx.beginPath(),
    ctx.lineWidth = this.r / 2,
    ctx.strokeStyle = this.color,
    ctx.moveTo(this.x + this.tilt + this.r / 4, this.y),
    ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4),
    ctx.stroke()
  } 
}