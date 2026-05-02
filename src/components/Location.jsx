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
                            style={{ marginBottom: '0.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 500 }}>
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
                            <p style={{ marginBottom: '1rem' }}>
                                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--maroon)' }}>
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
                                        background: 'var(--maroon)', color: 'white', textDecoration: 'none',
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
                <div style={{ position: 'relative', display: 'inline-block', width: '100%', marginTop: '8rem' }}>
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
                            <p style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--peacock)' }}>
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
                                        background: 'var(--peacock)', color: 'white', textDecoration: 'none',
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

                {/* Travel Notes */}
                <div style={{ marginTop: '2rem', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', lineHeight: 1.8, color: 'var(--text-dark)' }}>
                    <div style={{
                        maxWidth: '700px', margin: '0 auto', padding: '1rem 2rem',
                        background: 'rgba(201, 150, 62, 0.04)', borderRadius: '15px',
                        border: '1px dashed rgba(201, 150, 62, 0.3)', fontStyle: 'italic'
                    }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--gold-deep)', fontWeight: 'bold', marginRight: '0.5rem' }}>*</span>
                            Guests are requested to make their own arrangements for travel to the hotel.
                        </p>
                        <p>
                            <span style={{ color: 'var(--gold-deep)', fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                            Transportation to the Gurdwara for the Anand Karaj will be arranged from the hotel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
