import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import bgVideo from "../assets/page3.mp4"; // <-- Add your video file here
import loadingImage from "../assets/coverimage.png"; // Loading screen image

function Page2() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the video
    const video = document.createElement("video");
    video.src = bgVideo;
    video.oncanplaythrough = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1s delay before showing the page
    };
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
    <div className="h-screen relative bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div />
      <Navbar />
    </div>
  );
}

export default Page2;
