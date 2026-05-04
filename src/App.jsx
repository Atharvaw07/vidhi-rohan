import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PetalsCanvas from './components/PetalsCanvas';
import AudioPlayer from './components/AudioPlayer';
import EntryGate from './components/EntryGate';
import Hero from './components/Hero';
import WelcomeMessage from './components/WelcomeMessage';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Location from './components/Location';
import DressCode from './components/DressCode';
import ContactRSVP from './components/ContactRSVP';
import RSVPForm from './components/RSVPForm';
import ClosingImage from './components/ClosingImage';
import RSVPModal from './components/RSVPModal';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [gateVisible, setGateVisible] = useState(true);
    const [gateFading, setGateFading] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const audioRef = useRef(null);
    // Tracks whether audio was playing right before the tab was hidden
    const wasPlayingRef = useRef(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    // Pause on tab hide, resume on tab return (only if it was playing when hidden)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!audioRef.current) return;
            if (document.hidden) {
                wasPlayingRef.current = audioPlaying;
                if (audioPlaying) {
                    audioRef.current.pause();
                }
            } else {
                if (wasPlayingRef.current) {
                    audioRef.current.play();
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [audioPlaying]);

    // Initialize GSAP scroll reveal once main content is shown
    useEffect(() => {
        if (!mainVisible) return;

        // rAF so the DOM is painted before we register triggers
        const raf = requestAnimationFrame(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                gsap.to(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out'
                });
            });
        });

        return () => cancelAnimationFrame(raf);
    }, [mainVisible]);

    const revealMain = () => {
        if (mainVisible) return;

        setGateFading(true);
        setTimeout(() => setGateVisible(false), 800);

        setMainVisible(true);
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            setHeroVisible(true);
        }, 100);
    };

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (audioPlaying) {
            audioRef.current.pause();
            setAudioPlaying(false);
        } else {
            audioRef.current.play();
            setAudioPlaying(true);
        }
    };

    return (
        <>
            <PetalsCanvas />

            <AudioPlayer
                audioRef={audioRef}
                audioPlaying={audioPlaying}
                toggleAudio={toggleAudio}
            />

            {gateVisible && (
                <EntryGate
                    fading={gateFading}
                    audioRef={audioRef}
                    onReveal={revealMain}
                    setAudioPlaying={setAudioPlaying}
                />
            )}

            {mainVisible && (
                <div id="main-content" className="visible">
                    <Hero heroVisible={heroVisible} />
                    <WelcomeMessage />
                    <Countdown />
                    <Timeline />
                    <DressCode />

                    <Location />
                    <ContactRSVP />
                    <RSVPForm onSuccess={() => setShowModal(true)} />
                    
                    <ClosingImage />
                </div>
            )}

            <RSVPModal visible={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}

export default App;
