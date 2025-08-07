import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import MusicPlayer from '../components/MusicPlayer';
import Gallery from '../components/Gallery';

export default function Home() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSite(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {!showSite ? (
        <div className="flex justify-center items-center h-screen bg-leaf">
          <Player
            autoplay
            loop={false}
            src="/assets/lottie/totoro.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      ) : (
        <>
          <MusicPlayer />
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-2">Dear Mom: 50 Memories</h1>
            <p className="text-lg mb-6">Celebrating 50 beautiful years</p>
          </div>
          <Gallery />
        </>
      )}
    </div>
  );
}
