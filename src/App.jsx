import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bgImage from './assets/background.png';
import monkey from './assets/wojak.png';
import monkey2 from './assets/wojak2.png';
import imageTitle from './assets/title.png';
import coverImage from './assets/coverimage.png';
import tapSound from './assets/wojaksound.mp3';
import Navbar from './Navbar.jsx';
import loadingImage from "./assets/coverimage.png";
import log2 from "./assets/log2.png";
import log3 from "./assets/log3.png";
// import log4 from './assets/ape2.png';

function App() {
  const [showCover, setShowCover] = useState(false);
  const [fadeClass, setFadeClass] = useState('');
  const [showMonkey2, setShowMonkey2] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setShowCover(true);
    setFadeClass('fade-in-out');
    setTimeout(() => {
      navigate(path);
    }, 1200);
  };

  // When clicking the monkey image
  const handleMonkeyClick = () => {
    const audio = new Audio(tapSound);
    audio.volume = 0.75; // 75% volume
    audio.play();

    // Switch to overlay image
    setShowMonkey2(true);
    setIsAnimating(true);

    // Keep image + audio for 2.5 seconds
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      setShowMonkey2(false);
      setIsAnimating(false);
    }, 2500);
  };

  useEffect(() => {
    const imagesToLoad = [bgImage, monkey, monkey2, imageTitle];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
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

      {/* Title */}
      <div className="fixed top-[120px] left-1/2 transform -translate-x-1/2 z-20 group">
        <img
          src={imageTitle}
          alt="Image Title"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      {/* Monkey (click to overlay another) */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-150 h-auto cursor-pointer"
        onClick={handleMonkeyClick}
      >
        <img
          src={showMonkey2 ? monkey2 : monkey}
          alt="Monkey"
          className={`w-full h-auto transition-transform duration-500 ease-in-out 
            ${isAnimating ? 'scale-110' : 'scale-100'} 
            ${showMonkey2 ? 'drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]' : ''}`} 
            /* white glow */
        />
      </div>

      {/* Social Icons */}
      <div className="fixed top-4 right-6 z-50 flex space-x-4">
        <a
          href="https://t.me/PSYCHOmainCTO"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={log2} alt="Telegram" className="w-10 h-10" />
        </a>
        <a
          href="https://x.com/i/communities/1980990967051337848"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={log3} alt="X" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default App;
