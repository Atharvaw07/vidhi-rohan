export default function Hero({ heroVisible }) {
    return (
        <section id="hero">
            <video
                id="hero-video"
                className={heroVisible ? 'visible' : ''}
                src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Untitled%20design.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
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
