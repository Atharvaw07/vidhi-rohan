import React from 'react';

export default function AudioPlayer({ audioRef, audioPlaying, toggleAudio }) {
    return (
        <>
            <audio id="bg-audio" loop preload="auto" ref={audioRef}>
                <source
                    src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/rohan%20and%20vidhi/WhatsApp%20Audio%202026-05-04%20at%2013.32.17.mpeg"
                    type="audio/mpeg" />
            </audio>

            <button id="audio-btn" aria-label="Toggle background music" onClick={toggleAudio}>
                {audioPlaying ? (
                    <svg id="icon-on" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                    </svg>
                ) : (
                    <svg id="icon-off" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                    </svg>
                )}
            </button>
        </>
    );
}
