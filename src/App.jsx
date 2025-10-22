import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bgImage from './assets/background.png';
import monkey from './assets/monkey.png';
import monkey2 from './assets/monkey2.png';
import imageTitle from './assets/title.png';
import coverImage from './assets/coverimage.png';
import tapSound from './assets/monkeysound.mp3'; // <-- Import your mp3 here
import Navbar from './Navbar.jsx';
import { useEffect } from "react";
import loadingImage from "./assets/coverimage.png"; // Your loading screen image
import log2 from "./assets/log2.png"
import log3 from "./assets/log3.png"
import log4 from './assets/ape2.png'

function App() {
  const initialCount = parseInt(localStorage.getItem('tapCount') || '0', 10);
  const [clickCount, setClickCount] = useState(initialCount);
  const [isCountAnimating, setIsCountAnimating] = useState(false);

  const [showCover, setShowCover] = useState(false);
  const [fadeClass, setFadeClass] = useState('');
  const [showMonkey2, setShowMonkey2] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setShowCover(true);
    setFadeClass('fade-in-out');
    setTimeout(() => {
      navigate(path);
    }, 1200);
  };

  const handleButtonClick = () => {
    // Play sound
    const audio = new Audio(tapSound);
    audio.play();

    const newCount = clickCount + 1;
    setClickCount(newCount);
    localStorage.setItem('tapCount', newCount);

    // Trigger monkey animation
    setShowMonkey2(true);
    setIsAnimating(true);

    // Trigger count animation
    setIsCountAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setShowMonkey2(false);
    }, 200);

    setTimeout(() => {
      setIsCountAnimating(false);
    }, 300);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToLoad = [bgImage, monkey, monkey2, imageTitle ];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
           setTimeout(() => {
            setIsLoading(false);
          }, 1000); // 1.5 seconds delay
        }
      };
    });
  }, []);

if (isLoading) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <img
        src={loadingImage}
        alt="Loading..."
        className="w-full h-full object-cover fade-in-out"
      />
    </div>
  );
}
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {showCover && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <img
            src={coverImage}
            alt="Cover"
            className={`w-full h-full object-cover ${fadeClass}`}
          />
        </div>
      )}

      <Navbar onNavClick={handleNavClick} />

          {/* Title Image */}
      <div className="fixed top-[120px] left-1/2 transform -translate-x-1/2 z-20 group">
        <img
          src={imageTitle}
          alt="Image Title"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      {/* Monkey section */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-150 h-auto">
        <img
          src={showMonkey2 ? monkey2 : monkey}
          alt="Monkey"
          className={`w-full h-auto pointer-events-none transition-transform duration-300 ease-in-out 
            ${isAnimating ? 'scale-110' : 'scale-100'} 
            ${showMonkey2 ? 'drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]' : ''}`}
        />
      </div>

      {/* Button + Counter container */}
      <div className="fixed bottom-200 right-100 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
        <button
          onClick={handleButtonClick}
          className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 active:bg-yellow-600 px-12 py-8 rounded-full text-3xl font-bold shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95"
        >
          TAP ME 👆
        </button>

        <div
  className={`bg-[rgba(255,215,0,0.7)] text-yellow-900 px-10 py-6 rounded-lg shadow-md border border-yellow-400 text-lg font-bold transition-transform duration-300 ease-in-out ${
    isCountAnimating ? 'scale-110' : 'scale-100'
  }`}
>
  Total Taps: {clickCount}
</div>
      </div>
      {/* Social Icons - upper right */}
<div className="fixed top-4 right-6 z-50 flex space-x-4">
  {/* Telegram */}
    <a
    href="https://ape.store"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={log4} // or PNG path
      alt="Telegram"
      className="w-15 h-15"
    />
  </a>
  <a
    href="https://t.me/Trollangutan"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={log2} // or PNG path
      alt="Telegram"
      className="w-15 h-15"
    />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/trollangutan"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={log3} // or PNG path
      alt="X"
      className="w-15 h-15"
    />
  </a>
</div>
    </div>
    
  );
}

export default App;
