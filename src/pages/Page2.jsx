// import bgImage from '../assets/page3.png';
// import Navbar from '../Navbar';
// import monkey from '../assets/monkey4.png';
// import monkey2 from '../assets/page3.gif';
// import loadingImage from "../assets/coverimage.png"; // Your loading screen image
// import { useState, useEffect } from "react";


// function Page2() {
//   const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const imagesToLoad = [bgImage, monkey, monkey2];
//       let loadedCount = 0;
  
//       imagesToLoad.forEach((src) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = () => {
//           loadedCount++;
//           if (loadedCount === imagesToLoad.length) {
//             setTimeout(() => {
//             setIsLoading(false);
//           }, 1000); // 1.5 seconds delay
//           }
//         };
//       });
//     }, []);
  
//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
//         <img
//           src={loadingImage}
//           alt="Loading..."
//           className="w-full h-full object-cover fade-in-out"
//         />
//       </div>
//     );
//   }
//   return (
//     <div
//       className="h-screen relative bg-cover bg-center bg-black text-white overflow-hidden"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Monkey hover effect */}
//       <div className="absolute top-0 left-0 w-full h-full group">
//         {/* Default monkey image */}
//         <img
//           src={monkey}
//           alt="Monkey overlay"
//           className="w-full h-full object-cover pointer-events-none transform transition-transform duration-500 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_30px_rgba(8,177,241,0.9)]"
//         />

//         {/* Hover GIF */}
//         <img
//           src={monkey2}
//           alt="Monkey overlay hover"
//           className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none transform transition-transform duration-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:scale-110"
//         />
//       </div>
//     </div>
//   );
// }

// export default Page2;


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

      {/* Overlay for darker look (optional) */}
      <div />

      {/* Navbar */}
      <Navbar />

      {/* You can add any text or components here */}

    </div>
  );
}

export default Page2;
