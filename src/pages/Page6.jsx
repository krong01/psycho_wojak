import bgImage from '../assets/page7.png';
import Navbar from '../Navbar';
import monkey from '../assets/monkey7.png'
import loadingImage from "../assets/coverimage.png"; // Your loading screen image
import { useState, useEffect } from "react";

function Page6() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

          useEffect(() => {
            const imagesToLoad = [bgImage, monkey];
            let loadedCount = 0;
        
            imagesToLoad.forEach((src) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                loadedCount++;
                if (loadedCount === imagesToLoad.length) {
                   // Delay a bit, then start fade-out animation
          setTimeout(() => {
            setFadeOut(true);
            // Wait for fade-out to finish before hiding the loader
            setTimeout(() => setIsLoading(false), 800); // 0.8s fade duration
          }, 1000); // loading screen stays for 1.5s before fade-out
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
      className="h-screen relative bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
       <div className="absolute top-0 left-0 w-full h-full group">
            {/* Default monkey image */}
            <img
              src={monkey}
              alt="Monkey overlay"
              className="w-full h-full object-cover pointer-events-none transform transition-transform duration-500 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_30px_rgba(8,177,241,0.9)]"
            />
    
           
          </div>
      {/* Navbar */}
      <Navbar />

      {/* Overlay image */}
    
    </div>
  );
}

export default Page6;
