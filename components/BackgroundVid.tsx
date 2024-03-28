"use client";
import React, { useRef, useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link as LinkIcon } from "lucide-react";
import DiamondBorder from "./DiamondBorder";

let videos = [
  {
    url: "/vid/OpeningCeremonies.mp4",
    statement: "Our full Fair Schedule is available now!",
    buttonText: "Events",
  },
  {
    url: "/vid/Princess.mp4",
    statement: "Our Princess Pageant is coming up!",
    buttonText: "Pageant",
  },
  {
    url: "/vid/Stickball.mp4",
    statement: "Watch Choctaw Stickball in action!",
    buttonText: "Stickball",
  },
  {
    url: "/vid/Dancegrounds.mp4",
    statement: "Cultural Dances are a must-see!",
    buttonText: "Culture",
  },
  {
    url: "/vid/RezRun.mp4",
    statement: "Sign up for the Rez Run today!",
    buttonText: "Competitions",
  },
  {
    url: "/vid/IronWarrior.mp4",
    statement: "The Iron Warrior Challenge is back!",
    buttonText: "Competitions",
  },
  {
    url: "/vid/Midway.mp4",
    statement: "Check out the Midway Rides!",
    buttonText: "Family Fun",
  },
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
      currentVideoElement.src = videos[currentVideoIndex].url; // Access the 'url' property of the 'videos[currentVideoIndex]' object
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
    <div className="relative h-[65vh] w-full overflow-hidden bg-black sm:h-[80vh]">
      <video
        autoPlay
        muted
        playsInline
        ref={videoRef}
        className="h-full min-w-full object-cover"
      >
        <source src={videos[currentVideoIndex].url} type="video/mp4" />
      </video>
      <div
        key={currentVideoIndex}
        className="absolute bottom-0 left-0 right-0 flex h-[30vh] flex-col items-center justify-end bg-gradient-to-b from-transparent via-background to-red-100 pb-6 text-center text-foreground dark:to-red-950"
      >
        <h2 className="mb-4 animate-fade-in text-2xl sm:mb-6 sm:text-4xl">
          {videos[currentVideoIndex].statement}
        </h2>
        {/* <Button
          variant="outline"
          className="mb-4 animate-fade-in outline-none ring-2 ring-ring ring-offset-2"
        >
          {videos[currentVideoIndex].buttonText}
          <LinkIcon className="ml-2 h-4 w-4" />
        </Button> */}
        <ChevronDownIcon className="h-6 w-6 animate-bounce text-foreground" />
      </div>
    </div>
  );
}
