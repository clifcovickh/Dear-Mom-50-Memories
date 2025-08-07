import React, { useRef, useState, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg p-2 rounded-xl z-50">
      <button onClick={togglePlay} className="text-sm">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <audio ref={audioRef} loop src="/assets/bgm.mp3" />
    </div>
  );
}
