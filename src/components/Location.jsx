export default function Location() {
    return (
        <section id="location" style={{ background: 'white', paddingTop: '10rem', textAlign: 'center' }}>
            <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>

                {/* Hotel */}
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                    <img
                        src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/hotel.jpeg"
                        alt="Location Map"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', top: '-8%', left: 0, width: '100%', padding: '0 5%' }}>
                        <h2 className="section-heading"
                            style={{ marginBottom: '0.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 500, textShadow: '0 3px 12px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.10)' }}>
                            Location
                        </h2>
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            lineHeight: 1.6,
                            color: 'var(--text-dark)',
                            background: 'white',
                            padding: '10px',
                            display: 'inline-block',
                            borderRadius: '10px'
                        }}>
                            <p style={{ marginBottom: '1rem', textShadow: '0 1px 5px rgba(0,0,0,0.10)' }}>
                                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--gold-light)', textShadow: '0 2px 8px rgba(0,0,0,0.16)' }}>
                                    Welcomhotel By ITC, Amritsar
                                </strong><br />
                                Ajnala Rd, Raja Sansi,Amritsar, Punjab 143101
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                <a
                                    href="https://maps.app.goo.gl/Amb6WemAd75bAgrf8?g_st=ic"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: 'inline-block', padding: '0.6rem 1.5rem',
                                        background: 'var(--maroon)', color: 'var(--gold-light)', textDecoration: 'none',
                                        fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em',
                                        textTransform: 'uppercase', borderRadius: '50px',
                                        boxShadow: '0 4px 12px rgba(104, 1, 31, 0.2)', transition: 'all 0.3s ease'
                                    }}>
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gurdwara */}
                <div style={{ position: 'relative', display: 'inline-block', width: '100%', marginTop: '8rem',marginBottom:'5rem' }}>
                    <img
                        src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/mandir.jpeg"
                        alt="Gurdwara Location"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', top: '-68%', left: 0, width: '100%',padding:'0px 31px' }}>
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            lineHeight: 1.6,
                            color: 'var(--text-dark)',
                            background: 'white',
                            display: 'inline-block',
                            width: '100%'
                        }}>
                            <p style={{ marginBottom: '1rem', marginTop: '1rem', textShadow: '0 1px 5px rgba(0,0,0,0.10)' }}>
                                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--gold-light)', textShadow: '0 2px 8px rgba(0,0,0,0.16)' }}>
                                    Gurdwara Chhevin Patashahi
                                </strong><br />
                                MV35+V7F, A-B Block, Gumtala Sub Urban, D - Block,Ranjit Avenue, Amritsar, Punjab 143001
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                <a
                                    href="https://maps.app.goo.gl/fsuzi1vs8oumMeNT6?g_st=ic"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: 'inline-block', padding: '0.6rem 1.5rem',
                                        background: 'var(--maroon)', color: 'var(--gold-light)', textDecoration: 'none',
                                        fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em',
                                        textTransform: 'uppercase', borderRadius: '50px',
                                        boxShadow: '0 4px 12px rgba(26, 70, 57, 0.2)', transition: 'all 0.3s ease'
                                    }}>
                                    View Gurdwara on Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
