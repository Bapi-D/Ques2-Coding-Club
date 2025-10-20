import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const BackgroundMusic = () => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleLoad = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked, start muted
          setMuted(true);
        });
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (audioRef.current && !muted) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked, mute audio
          setMuted(true);
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, muted]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.muted = false;
        setMuted(false);
        audioRef.current.play().catch(() => {
          setMuted(true);
        });
      } else {
        audioRef.current.muted = true;
        setMuted(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        autoPlay
        muted={muted}
      />

      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          top: 20,
          left: 6,
          zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 20,
          height: 20,
          cursor: 'pointer',
          fontSize: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        title={muted ? 'Unmute background music' : 'Mute background music'}
      >
        {muted ? '🔇' : '♫'}
      </button>
    </>
  );
};

export default BackgroundMusic;
