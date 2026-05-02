import JaggedDivider from './JaggedDivider';

export default function ContactRSVP() {
    return (
        <section id="contact-rsvp"
            style={{ background: 'var(--maroon)', textAlign: 'center', padding: '4rem 1.5rem 7rem', zIndex: 3, position: 'relative' }}>
            <div id="svg-element-bottom-contact" style={{
                position: 'absolute', top: '36px', left: 0, width: '100%',
                lineHeight: 0, zIndex: 5, transform: 'translateY(99%)',rotate:'180deg'
            }}>
                <JaggedDivider fill="var(--maroon)" />
            </div>

            <div className="reveal">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: '#fffaf8', marginBottom: '1rem', lineHeight: 1.2 }}>
                        Details
                    </p>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', lineHeight: 1.6, color: '#fffaf8', fontWeight: 400 }}>
                        <p style={{ marginBottom: '2rem' }}>
                            For additional information and queries feel free to contact
                        </p>
                        <div style={{ marginBottom: '2.5rem', fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: 'var(--gold-pale)', letterSpacing: '0.05em' }}>

                            <p>
                                Rahul <a href="tel:+919821313359" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98213 13359</a>
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>
                                Deepak <a href="tel:+918082012600" style={{ color: 'inherit', textDecoration: 'none' }}>+91 80820 12600</a>
                            </p>
                            
                        </div>
                        <p style={{ marginBottom: '2rem' }}>
                            With love and anticipation,<br />
                            we look forward to celebrating together.
                        </p>
                    </div>
                </div>
            </div>

<div style={{ position: 'absolute', bottom: -64, left: 0, width: '100%', height: '175px', overflow: 'hidden' }}>
    <img src="flowersdetails.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
</div>

           
        </section>
    );
}
