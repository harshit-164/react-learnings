import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    if (!overlay) return; // safety check

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const pos = `${x}px ${y}px`;
      overlay.style.maskImage = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
      overlay.style.webkitMaskImage = overlay.style.maskImage;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      <div className=" inset-0 flex flex-col items-center justify-center">

        <div>
        <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>
        </div>

        <div>
        <a
          href="/"
          className="absolute top-115 left-180 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
        >
          Go Home
        </a>
        </div>

      </div>

      <div
        id="overlay"
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      ></div>
    </div>
  );
};

export default NotFound;
