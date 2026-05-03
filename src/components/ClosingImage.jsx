export default function ClosingImage() {
    return (
        <section id="closing-image" className="reveal" style={{
            width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'
        }}>
            {/* Solid maroon header with text */}
            <div style={{
                backgroundColor: 'var(--maroon)',
                width: '100%',
                padding: '2.8rem 1.5rem 0.2rem',
                textAlign: 'center',
                color: '#fffaf8'
            }}>
                <p style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: 'clamp(2.2rem, 10vw, 3.5rem)',
                    marginBottom: '0.2rem',
                    lineHeight: 1.1,
                }}>
                    Hope to see you there!
                </p>
                <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    margin: 0
                }}>
                    Rohan and Vidhi
                </h2>
            </div>

            {/* Couple photo — zoomed out to show full bodies */}
            <div style={{ position: 'relative', width: '100%', minHeight: '75vh' }}>
                <img
                    src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/couplephoto.jpeg"
                    alt="Rohan and Vidhi"
                    style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: '30% center',
                        display: 'block'
                    }}
                />
                {/* Rectangle overlay on top of the photo */}
                <img
                    src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Rectangle_230.png"
                    alt=""
                    style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'bottom',
                        zIndex: 1
                    }}
                />
            </div>
        </section>
    );
}
