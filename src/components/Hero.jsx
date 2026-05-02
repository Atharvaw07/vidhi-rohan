export default function Hero({ heroVisible }) {
    return (
        <section id="hero">
            <img
                id="hero-img"
                className={heroVisible ? 'visible' : ''}
                src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/WhatsApp%20Image%202026-05-01%20at%2016.49.13.jpeg"
                alt="Vidhi &amp; Rohan Hero"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                {/* Names and Date are already in the image */}
            </div>
            <div className={`hero-scroll-cue${heroVisible ? ' visible' : ''}`} id="hero-scroll-cue">
                <p>Scroll Down</p>
                <div className="cue-line"></div>
            </div>
        </section>
    );
}
