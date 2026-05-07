import { useRef } from 'react';

export default function EntryGate({ fading, audioRef, onReveal, setAudioPlaying }) {
    const videoRef = useRef(null);

    const handleClick = async () => {
        try {
            if (videoRef.current) {
                videoRef.current.muted = false;
                await videoRef.current.play();
            }
            if (audioRef.current) {
                await audioRef.current.play();
                setAudioPlaying(true);
            }
        } catch (e) {
            console.warn("Autoplay blocked, revealing main.");
            onReveal();
        }
    };

    return (
        <div id="entry-gate" className={fading ? 'fade-out' : ''} onClick={handleClick}>
            <video
                id="entry-video"
                ref={videoRef}
                playsInline
                preload="auto"
                muted
                poster="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Best%20Entry%20Video%20(31).mp4#t=1"
                onEnded={onReveal}
                onError={onReveal}
            >
                <source
                    src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/Best%20Entry%20Video%20(31).mp4#t=0.1"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}
