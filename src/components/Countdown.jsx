import { useState, useEffect } from 'react';
import JaggedDivider from './JaggedDivider';

export default function Countdown() {
    const [time, setTime] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

    useEffect(() => {
        const target = new Date('June 27, 2026 09:00:00').getTime();
        const pad = (num) => num.toString().padStart(2, '0');

        const tick = () => {
            const now = new Date().getTime();
            const diff = target - now;
            if (diff < 0) return;

            setTime({
                days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
                hours: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
                mins: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
                secs: pad(Math.floor((diff % (1000 * 60)) / 1000)),
            });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="countdown-section"
            style={{ position: 'relative', background: 'var(--white)', padding: '5rem 1.5rem 5rem' }}>

            <div id="svg-element" style={{
                position: 'absolute', top: '42px', left: 0, width: '100%',
                lineHeight: 0, zIndex: 2, transform: 'translateY(-99%)'
            }}>
                <JaggedDivider fill="var(--maroon)" />
            </div>

            <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    color: 'var(--gold-light)',
                    fontWeight: 'normal',
                    marginBottom: '1.5rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.10)'
                }}>
                    Forever Begins In
                </h2>

                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    gap: 'clamp(0.5rem, 3vw, 2rem)', marginBottom: '1rem',
                    fontFamily: "'Ovo', serif"
                }}>
                    <span id="cd-days" style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', color: 'var(--maroon)', fontWeight: 400, minWidth: '1.5ch', textShadow: '0 3px 10px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.10)' }}>{time.days}</span>
                    <span style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', color: 'var(--gold-light)', opacity: 0.8, textShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>:</span>
                    <span id="cd-hours" style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', color: 'var(--maroon)', fontWeight: 400, minWidth: '1.5ch', textShadow: '0 3px 10px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.10)' }}>{time.hours}</span>
                    <span style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', color: 'var(--gold-light)', opacity: 0.8, textShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>:</span>
                    <span id="cd-mins" style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', color: 'var(--maroon)', fontWeight: 400, minWidth: '1.5ch', textShadow: '0 3px 10px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.10)' }}>{time.mins}</span>
                    <span style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', color: 'var(--gold-light)', opacity: 0.8, textShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>:</span>
                    <span id="cd-secs" style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', color: 'var(--maroon)', fontWeight: 400, minWidth: '1.5ch', textShadow: '0 3px 10px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.10)' }}>{time.secs}</span>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'center',
                    gap: 'clamp(1.5rem, 8vw, 4.8rem)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)',
                    color: '#666',
                    marginTop: '-0.5rem',
                    textShadow: '0 1px 4px rgba(0,0,0,0.10)'
                }}>
                    <span style={{ minWidth: '4rem', textAlign: 'center' }}>Days</span>
                    <span style={{ minWidth: '4rem', textAlign: 'center' }}>Hours</span>
                    <span style={{ minWidth: '4rem', textAlign: 'center' }}>Minutes</span>
                    <span style={{ minWidth: '4rem', textAlign: 'center' }}>Seconds</span>
                </div>
            </div>
        </section>
    );
}
