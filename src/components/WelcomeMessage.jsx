export default function WelcomeMessage() {
    return (
        <section id="welcome-message"
            style={{ background: 'var(--maroon)', textAlign: 'center', padding: '2rem 1.5rem', zIndex: 3 }}>
            <div className="reveal">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: 'clamp(2.1rem, 8vw, 3.5rem)',
                        color: '#fffaf8',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Dear Friends and Family,
                    </p>
                    <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
                        lineHeight: 1.6,
                        color: '#fffaf8',
                        fontWeight: 400,
                        padding: '0px 31px'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            As we get ready to begin our new journey, we feel grateful for wonderful people in our lives. 
                        </p>
                        <p>
                            Your support means the world to us, and we would be honoured to have you join us celebrate our big day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
