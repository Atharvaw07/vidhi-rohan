export default function RSVPModal({ visible, onClose }) {
    if (!visible) return null;

    return (
        <div id="rsvp-modal" style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
            zIndex: 10000, display: 'flex', alignItems: 'center',
            justifyContent: 'center', backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                background: 'white', padding: '3rem', borderRadius: '20px',
                textAlign: 'center', maxWidth: '400px', width: '90%'
            }}>
                <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', color: 'var(--gold-light)', marginBottom: '1rem' }}>
                    Thank You!
                </h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--text-mid)', marginBottom: '2rem' }}>
                    We've received your RSVP. We look forward to seeing you!
                </p>
                <button
                    onClick={onClose}
                    style={{
                        background: 'var(--maroon)', color: 'white', border: 'none',
                        padding: '0.8rem 2rem', borderRadius: '50px',
                        fontFamily: "'Cinzel', serif", fontSize: '0.6rem',
                        letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer'
                    }}>
                    Close
                </button>
            </div>
        </div>
    );
}
