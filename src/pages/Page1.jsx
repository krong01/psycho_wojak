import { useState, useEffect } from "react";
import bgImage from "../assets/page2.png";
import sideImage from "../assets/wojak3.png";
import loadingImage from "../assets/coverimage.png"; // Your loading screen image
import Navbar from "../Navbar";

function Page1() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToLoad = [bgImage, sideImage];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000); // 1 second delay
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
      <Navbar />

      {/* Bottom-left side image */}
      <div className="absolute left-[-70px] bottom-[-55px] z-20 overflow-hidden p-1">
        <img
          src={sideImage}
          alt="Side"
          className="w-[750px] h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] select-none pointer-events-auto"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Page1;
