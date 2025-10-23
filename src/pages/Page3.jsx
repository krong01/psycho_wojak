import { useState, useEffect } from "react";
import bgImage from "../assets/page4.png";
import Navbar from "../Navbar";
import monkey2 from "../assets/wojak5.png";
import loadingImage from "../assets/coverimage.png";

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
      className="h-screen relative bg-cover bg-center bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* Bottom-right side image */}
      <div className="absolute right-[-70px] bottom-[-175px] z-20 overflow-hidden p-1">
        <img
          src={monkey2}
          alt="Side"
          className="w-[850px] h-auto object-contain transition-all duration-700 ease-in-out hover:scale-110 select-none pointer-events-auto"
          style={{
            backgroundColor: "transparent",
            mixBlendMode: "normal",
            WebkitMaskImage: "linear-gradient(black, black)",
            maskImage: "linear-gradient(black, black)",
            filter: "drop-shadow(0 0 25px rgba(255,255,255,0))",
            transition: "transform 0.7s ease-in-out, filter 0.7s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 40px rgba(255,255,255,0.9))")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 25px rgba(255,255,255,0))")
          }
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Page3;
