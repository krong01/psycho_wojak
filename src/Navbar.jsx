import React from 'react';
import { useNavigate } from 'react-router-dom';

import title1 from './assets/title1.png';
import title2 from './assets/title2.png';
import title3 from './assets/title3.png';
// import title4 from './assets/title4.png';
// import title5 from './assets/title5.png';
// import title6 from './assets/title6.png';
import title7 from './assets/title7.png';


function Navbar({ onNavClick }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (location.pathname === path) return;
    if (onNavClick) {
      onNavClick(path); // use animated transition
    } else {
      navigate(path); // fallback if transition not needed
    }
  };

  return (
    <div className="fixed top-[60px] left-1/2 transform -translate-x-1/2 z-30 flex space-x-20">
         <div className="w-14 h-14 flex items-center justify-center floating6">
        <img
          src={title7}
          alt="Nav 6"
          className="max-w-15 max-h-full hover:scale-110 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          onClick={() => handleClick('/')}
        />
      </div>
      <div
        onClick={() => handleClick('/page1')}
        className="w-16 h-16 flex items-center justify-center floating1 cursor-pointer"
      >
        <img
          src={title1}
          alt="Nav 1"
          className="max-w-20 max-h-full hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        />
      </div>
      <div className="w-14 h-14 flex items-center justify-center floating2">
        <img
          src={title2}
          alt="Nav 2"
          className="max-w-18 max-h-auto hover:scale-110 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          onClick={() => handleClick('/page2')}
        />
      </div>
      <div className="w-16 h-16 flex items-center justify-center floating3">
        <img
          src={title3}
          alt="Nav 3"
          className="max-w-25 max-h-full hover:scale-110 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          onClick={() => handleClick('/page3')}
        />
      </div>
    </div>
  );
}

export default Navbar;
