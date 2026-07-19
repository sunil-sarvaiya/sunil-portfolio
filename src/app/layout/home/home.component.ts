import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { homedata } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  homeData: any;

  displayText = '';

  private typingWords = ['Angular Developer'];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;
  private particleCanvas: HTMLCanvasElement | null = null;
  private particleCtx: CanvasRenderingContext2D | null = null;
  private particles: any[] = [];
  private animationFrameId: any;

  constructor() { }

  ngOnInit() {
    this.homeData = homedata;
  }

  ngAfterViewInit() {
    this.startTyping();
    this.initParticles();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimer);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  startTyping() {
    const word = this.typingWords[this.wordIndex];
    if (this.isDeleting) {
      this.displayText = word.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayText = word.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === word.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.typingWords.length;
      speed = 500;
    }

    this.typingTimer = setTimeout(() => this.startTyping(), speed);
  }

  initParticles() {
    this.particleCanvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    if (!this.particleCanvas) return;

    this.particleCtx = this.particleCanvas.getContext('2d');
    this.resizeCanvas();
    this.createParticles();
    this.animateParticles();

    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (this.particleCanvas) {
      this.particleCanvas.width = window.innerWidth;
      this.particleCanvas.height = window.innerHeight;
    }
  }

  createParticles() {
    const count = 80;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * (this.particleCanvas?.width || 0),
        y: Math.random() * (this.particleCanvas?.height || 0),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }

  animateParticles() {
    if (!this.particleCtx || !this.particleCanvas) return;

    this.particleCtx.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);

    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.particleCanvas!.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.particleCanvas!.height) p.vy *= -1;

      this.particleCtx!.beginPath();
      this.particleCtx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.particleCtx!.fillStyle = 'rgba(230, 126, 34, 0.4)';
      this.particleCtx!.fill();

      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = p.x - this.particles[j].x;
        const dy = p.y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.particleCtx!.beginPath();
          this.particleCtx!.moveTo(p.x, p.y);
          this.particleCtx!.lineTo(this.particles[j].x, this.particles[j].y);
          this.particleCtx!.strokeStyle = `rgba(230, 126, 34, ${0.15 * (1 - dist / 120)})`;
          this.particleCtx!.lineWidth = 0.5;
          this.particleCtx!.stroke();
        }
      }
    });

    this.animationFrameId = requestAnimationFrame(() => this.animateParticles());
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/Sarvaiya Sunil\'s Resume.pdf';
    link.download = 'Sarvaiya Sunil\'s Resume.pdf';
    link.click();
  }
}
