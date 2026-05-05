import { useRef, useEffect } from 'react';

const FRAME_URL = "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Group_169.png.webp";

function DressEntry({ photo, alt, event, date, time, attire, reverse }) {
    const frameRef = useRef(null);

    useEffect(() => {
        const el = frameRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Small delay so the GSAP fade-in starts first
                    setTimeout(() => el.classList.add('dc-hang'), 700);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`dc-row reveal${reverse ? ' dc-rev' : ''}`}>
            <div className="dc-frame-box" ref={frameRef}>
                <img className="dc-photo" src={photo} alt={event} onError={e => e.target.style.display = 'none'} />
                <img className="dc-frame-img" src={FRAME_URL} alt="" />
            </div>
            <div className="dc-text">
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: 'var(--gold-light)', marginBottom: 0, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', textShadow: '0 2px 8px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.10)' }}>
                    {event}
                </h3>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', color: 'var(--gold-light)', marginBottom: 0, lineHeight: 1.8, fontWeight: 400, textShadow: '0 1px 5px rgba(0,0,0,0.13)' }}>
                    {date} | {time}
                </p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: 'var(--gold-light)', marginBottom: 0, lineHeight: 1.5, fontWeight: 400, textShadow: '0 1px 5px rgba(0,0,0,0.13)' }}>
                    {attire}
                </p>
            </div>
        </div>
    );
}

export default function DressCode() {
    return (
        <section id="dress-code" style={{ background: '#ffffff', padding: '4rem 1rem 4rem', position: 'relative' }}>

            <div className="reveal" style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
                <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(2.5rem, 9vw, 4.5rem)', color: 'var(--gold-light)', fontWeight: 'normal', marginBottom: '1rem', lineHeight: 1, textShadow: '0 3px 12px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.10)' }}>
                    Dress Code
                </h2>
              
            </div>

            <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 0.25rem' }}>

                {/* Mehendi */}
                <DressEntry
                    photo="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/mhendi.PNG"
                    alt="Mehendi"
                    event="Mehendi"
                    date="26th June 2026"
                    time="4 PM"
                    attire={<>Shades of Green<br />or Yellow</>}
                    reverse={false}
                />

                {/* Cocktail */}
                <DressEntry
                    photo="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/cocktail.PNG"
                    alt="Cocktail"
                    event="Cocktail"
                    date="26th June 2026"
                    time="8 PM"
                    attire="Dark & Dazzling"
                    reverse={true}
                />

                {/* Anand Karaj */}
                <DressEntry
                    photo="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/anandkaraj.PNG"
                    alt="Anand Karaj"
                    event="Anand Karaj"
                    date="27th June 2026"
                    time="4 PM"
                    attire={<>Royal Traditional<br /><span style={{ fontSize: '0.9em', opacity: 0.8 }}>(Head Covered)</span></>}
                    reverse={false}
                />

              


<DressEntry
                    photo="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/retronight.PNG"
                    alt="Retro Night"
                    event="Retro Night"
                    date="27th June 2026"
                    time="8 PM"
                    attire="Retro Glam"
                    reverse={true}
                />

                {/* Retro Night */}
                {/* <div className="dc-row dc-rev reveal" style={{ marginBottom: 0 }}>
                    <div className="dc-frame-box">
                        <img className="dc-photo" src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/retronight.PNG" alt="Retro Night" onError={e => e.target.style.display = 'none'} />
                        <img className="dc-frame-img" src={FRAME_URL} alt="" />
                    </div>
                    <div className="dc-text">
                        <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.125rem', color: 'var(--maroon)', marginBottom: 0, fontWeight: 400, letterSpacing: '0.02em' }}>Retro Night</h3>
                        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.125rem', color: 'var(--gold-rich)', marginBottom: 0, lineHeight: 1.8, fontWeight: 400 }}>27th June 2026<br />8 PM</p>
                        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: 0, lineHeight: 1.5, fontWeight: 400 }}>Retro Glam</p>
                    </div>
                </div> */}

            </div>

            <div style={{ position: 'absolute', bottom: -100, left: 0, width: '100%', height: '175px', overflow: 'hidden' }}>
    <img src="flowersdetails.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
</div>
        </section>
    );
}
