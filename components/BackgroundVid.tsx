"use client";
import React, { useRef, useEffect, useState } from "react";

let videos = [
  "/vid/OpeningCeremonies.mp4",
  "/vid/Princess.mp4",
  "/vid/Stickball.mp4",
  "/vid/Dancegrounds.mp4",
  "/vid/RezRun.mp4",
  "/vid/IronWarrior.mp4",
  "/vid/Midway.mp4",
];

export default function BackgroundVid() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    let currentVideoElement = videoRef.current;

    if (currentVideoElement) {
      currentVideoElement.addEventListener("ended", nextVideo);
      return () => {
        currentVideoElement.removeEventListener("ended", nextVideo);
      };
    }
  }, []);

  useEffect(() => {
    let currentVideoElement = videoRef.current;
    if (currentVideoElement) {
      currentVideoElement.src = videos[currentVideoIndex];
      currentVideoElement.load();
      currentVideoElement.addEventListener("loadeddata", () => {
        currentVideoElement.play().catch((error) => {
          // Handle error
          console.error("Error playing video:", error);
        });
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-black">
      <div className="absolute left-0 top-0 z-[1] h-full w-full bg-amber-600/10"></div>
      <video
        autoPlay
        muted
        playsInline
        ref={videoRef}
        className="h-full w-auto object-cover"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </div>
  );
}
