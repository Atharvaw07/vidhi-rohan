export default function ClosingImage() {
    return (
        <section id="closing-image" className="reveal" style={{
            position: 'relative', width: '100%', minHeight: '85vh',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'flex-start', paddingTop: '4.5rem', overflow: 'hidden'
        }}>
            {/* Main Couple Photo */}
            <img
                src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/couplephoto.jpeg"
                alt="Rohan and Vidhi"
                style={{
                    position: 'absolute', inset: '0', width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: '30% 20%', zIndex: 1
                }}
            />

            {/* Red Image Overlay Effect */}
            <img
                src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Rectangle_230.png"
                alt=""
                style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'bottom', zIndex: 2
                }}
            />

            {/* Subtle gradient */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '40%',
                background: 'linear-gradient(to bottom, rgba(107, 31, 44, 1) 0%, transparent 100%)',
                zIndex: 2
            }}></div>

            {/* Text Content */}
            <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: '#fffaf8', width: '100%', padding: '0 1.5rem' }}>
                <p style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: 'clamp(2.2rem, 10vw, 3.5rem)',
                    marginBottom: '0.2rem',
                    lineHeight: 1.1,
                    textShadow: '0 4px 16px rgba(74, 20, 33, 0.6)'
                }}>
                    Hope to see you there!
                </p>
                <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    textShadow: '0 4px 16px rgba(74, 20, 33, 0.5)'
                }}>
                    Rohan and Vidhi
                </h2>
            </div>
        </section>
    );
}
