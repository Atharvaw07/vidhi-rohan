import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JaggedDivider from './JaggedDivider';

gsap.registerPlugin(ScrollTrigger);

const timelineEntryStyle = {
    display: 'flex', alignItems: 'center', marginBottom: '40px', position: 'relative'
};
const entryTimeStyle = {
    flex: 1, textAlign: 'right', paddingRight: 'clamp(40px, 8vw, 100px)',
    fontFamily: "'Ovo', serif", fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: 'var(--gold-light)'
};
const entryMarkerStyle = {
    width: '14px', height: '12px', background: 'var(--gold-light)',
    transform: 'rotate(45deg)', zIndex: 2, flexShrink: 0,
    boxShadow: '0 0 10px rgba(232,192,122,0.4)'
};
const entryContentStyle = {
    flex: 1, textAlign: 'left', paddingLeft: 'clamp(40px, 8vw, 100px)'
};
const h4Style = {
    fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem',
    color: 'var(--gold-light)', marginBottom: '0.3rem'
};
const h4SmStyle = {
    fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem',
    color: 'var(--gold-light)', margin: 0
};
const shimmerSpanStyle = {
    fontFamily: "'Tenor Sans', sans-serif", fontSize: '0.6rem',
    textTransform: 'uppercase', letterSpacing: '0.1em',color: 'var(--gold-light)'
};

export default function Timeline() {
    useEffect(() => {
        // rAF ensures the browser has painted and layout measurements are accurate
        const raf = requestAnimationFrame(() => {
            const flower = document.getElementById('timeline-flower');
            const container = document.getElementById('timeline-container');
            const line = document.getElementById('timeline-line');
            const markers = document.querySelectorAll('.entry-marker');
            const lastMarker = markers[markers.length - 1];

            if (!flower || !container || !line || !lastMarker) return;

            const containerRect = container.getBoundingClientRect();
            const markerRect = lastMarker.getBoundingClientRect();
            const stopPoint = (markerRect.top - containerRect.top) + (markerRect.height / 2);

            line.style.height = stopPoint + 'px';
            line.style.bottom = 'auto';

            gsap.to(flower, {
                scrollTrigger: {
                    trigger: '#timeline',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1
                },
                y: stopPoint,
                ease: 'none'
            });
        });

        return () => {
            cancelAnimationFrame(raf);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="timeline"
            style={{ background: 'var(--maroon)', color: 'white', padding: '3rem 1.5rem 0rem', position: 'relative', overflow: 'visible' }}>

            {/* Top Jagged Divider */}
            <div id="svg-element-timeline" style={{
                position: 'absolute', top: '32px', left: 0, width: '100%',
                lineHeight: 0, zIndex: 5, transform: 'translateY(-99%) rotate(180deg)'
            }}>
                <JaggedDivider fill="var(--maroon)" />
            </div>

            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                    color: 'var(--gold-light)',
                    fontWeight: 400
                }}>
                    Schedule of Events
                </h2>
            </div>

            {/* Timeline Container */}
            <div id="timeline-container"
                style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', padding: '40px 6px' }}>

                {/* Central Vertical Line */}
                <div id="timeline-line"
                    style={{
                        position: 'absolute', left: '50%', top: 0, bottom: 0,
                        width: '1px', background: 'rgba(232, 192, 122, 0.4)', transform: 'translateX(-50%)'
                    }}>
                </div>

                {/* Floating Tracking Flower */}
                <div id="timeline-flower"
                    style={{
                        position: 'absolute', left: '50%', top: 0,
                        transform: 'translate(-50%, -50%)', zIndex: 10,
                        width: 'clamp(50px, 10vw, 80px)', height: 'clamp(50px, 10vw, 80px)'
                    }}>
                    <img
                        src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/image.png"
                        alt="Tracking Flower"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                    />
                </div>

                {/* --- Day 1 --- */}
                <div className="timeline-day-group" style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.3em', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>Friday</span>
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', background: 'var(--maroon)', display: 'inline-block', position: 'relative', zIndex: 2 }}>
                            Day 1: 26th June
                        </h3>
                    </div>
                    <div className="timeline-items">
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>01:00 PM</div>
                            <div className="entry-marker" style={entryMarkerStyle}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4Style}>The Arrival &amp; Welcome Lunch</h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>02:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4Style}>Check in</h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>04:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Mehendi Muse - <span style={shimmerSpanStyle}>Henna &amp; Hi Tea</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>08:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    The First Toast - <span style={shimmerSpanStyle} >Cocktails &amp; Ring Ceremony</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Day 2 --- */}
                <div className="timeline-day-group" style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.3em', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>Saturday</span>
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', background: 'var(--maroon)', display: 'inline-block',position: 'relative', zIndex: 2 }}>
                            Day 2: 27th June
                        </h3>
                    </div>
                    <div className="timeline-items">
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>07:00 AM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Sunrise Start - <span style={shimmerSpanStyle}>Breakfast</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>01:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Midday Mingle - <span style={shimmerSpanStyle}>Lunch</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>03:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Sacred Steps - <span style={shimmerSpanStyle}>Departure to Gurdwara</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>04:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Anand Karaj - <span style={shimmerSpanStyle}>The Wedding Ceremony</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>06:30 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Varmala - <span style={shimmerSpanStyle}>Exchange of Garlands</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>08:00 PM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    Retro Night - <span style={shimmerSpanStyle}>Farewell Dinner</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Day 3 --- */}
                <div className="timeline-day-group" style={{ marginBottom: '60px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.3em', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>Sunday</span>
                        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)', background: 'var(--maroon)', display: 'inline-block',position: 'relative', zIndex: 2 }}>
                            Day 3: 28th June
                        </h3>
                    </div>
                    <div className="timeline-items">
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>07:00 AM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4SmStyle}>
                                    A Grateful Goodbye - <span style={shimmerSpanStyle}>Breakfast</span>
                                </h4>
                            </div>
                        </div>
                        <div className="timeline-entry" style={timelineEntryStyle}>
                            <div className="entry-time" style={entryTimeStyle}>11:00 AM</div>
                            <div className="entry-marker" style={{ ...entryMarkerStyle, boxShadow: 'none' }}></div>
                            <div className="entry-content" style={entryContentStyle}>
                                <h4 style={h4Style}>Check Out</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Jagged Divider */}
            <div id="svg-element-bottom-schedule" style={{
                position: 'absolute', bottom: '36px', left: 0, width: '100%',
                lineHeight: 0, zIndex: 5, transform: 'translateY(99%)'
            }}>
                <JaggedDivider fill="var(--maroon)" />
            </div>
        </section>
    );
}
