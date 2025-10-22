import bgImage from '../assets/page5.png';
import overlayImage from '../assets/monkey6.png'; // Import your overlay image
import Navbar from '../Navbar';
import loadingImage from "../assets/coverimage.png"; // Your loading screen image
import { useState, useEffect } from "react";

function Page4() {
  const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const imagesToLoad = [bgImage, overlayImage];
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
      className="h-screen relative bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
       <div className="absolute top-0 left-0 w-full h-full group">
         {/* Default monkey image */}
         <img
           src={overlayImage}
           alt="Monkey overlay"
           className="w-full h-full object-cover pointer-events-none transform transition-transform duration-500 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_30px_rgba(206,225,102,0.9)]"
         />
 
       </div>
      {/* Navbar */}
      <Navbar />

      {/* Overlay image */}
    
    </div>
  );
}

export default Page4;
