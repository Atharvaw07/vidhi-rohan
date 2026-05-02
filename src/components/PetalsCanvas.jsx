import { useEffect, useRef } from 'react';

export default function PetalsCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        let animationFrameId;

        function resize() { 
            canvas.width = window.innerWidth; 
            canvas.height = window.innerHeight; 
        }
        resize(); 
        window.addEventListener('resize', resize);
        
        const COLORS = ['#FFF8F0', '#F5E4C0', '#E8C07A', '#C9963E', '#EFD9B5'];
        const COUNT = 30;
        const petals = [];
        
        class Petal {
            constructor() { this.reset(true); }
            reset(initial) {
                this.x = Math.random() * canvas.width;
                this.y = initial ? Math.random() * canvas.height : -20;
                this.r = 4 + Math.random() * 5;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = 0.6 + Math.random() * 1.2;
                this.rot = Math.random() * Math.PI * 2;
                this.drot = (Math.random() - 0.5) * 0.04;
                this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
                this.alpha = 0.5 + Math.random() * 0.4;
            }
            update() {
                this.x += this.vx; this.y += this.vy; this.rot += this.drot;
                if (this.y > canvas.height + 20) this.reset(false);
            }
            draw() {
                ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.rot);
                ctx.globalAlpha = this.alpha; ctx.fillStyle = this.color;
                ctx.beginPath(); ctx.ellipse(0, 0, this.r * 0.5, this.r, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
            }
        }
        
        for (let i = 0; i < COUNT; i++) petals.push(new Petal());
        
        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petals.forEach(p => { p.update(); p.draw(); });
            animationFrameId = requestAnimationFrame(loop);
        }
        loop();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="petals-canvas" ref={canvasRef}></canvas>;
}
