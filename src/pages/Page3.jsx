import bgImage from '../assets/page4.png';
import Navbar from '../Navbar';
import monkey2 from '../assets/monkey5.png';
import loadingImage from "../assets/coverimage.png"; // Your loading screen image
import { useState, useEffect } from "react";

function Page3() {
    const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const imagesToLoad = [bgImage, monkey2];
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
      className="h-screen relative bg-cover bg-center bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <Navbar />

     
 {/* Side image */}
            <div className="absolute top-140 left-30 top-1/2 transform -translate-y-1/2 z-20">
            <img
                src={monkey2}
                alt="Side"
                className="w-1000px h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(250,170,38,0.9)]"
            />
            </div>
      </div>
  );
}

export default Page3;
