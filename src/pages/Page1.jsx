import { useState, useEffect } from "react";
import bgImage from "../assets/page2.png";
import sideImage from "../assets/monkey3.png";
import planeImage from "../assets/plane.png";
import loadingImage from "../assets/coverimage.png"; // Your loading screen image
import Navbar from "../Navbar";

function Page1() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToLoad = [bgImage, sideImage, planeImage];
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
      className="h-screen relative bg-cover bg-center bg-black text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
    

      {/* Flying plane */}
      <div className="absolute top-20 left-[-200px] w-[300px] z-10 plane-fly">
        <img src={planeImage} alt="Flying Plane" className="w-full h-auto" />
      </div>

      {/* Side image */}
      <div className="absolute left-40 top-1/2 transform -translate-y-1/2 z-20">
        <img
          src={sideImage}
          alt="Side"
          className="w-[1000px] h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
        />
      </div>
    </div>
  );
}

export default Page1;
