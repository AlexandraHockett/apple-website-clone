"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

import { heroVideo, smallHeroVideo } from "@/utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Ensure this runs on the client
    const initialVideoSrc =
      window.innerWidth < 760 ? smallHeroVideo : heroVideo;
    setVideoSrc(initialVideoSrc);

    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          {videoSrc && ( // Ensure videoSrc is set before rendering the video
            <video
              className="pointer-events-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <a href="#highligths" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From 199€/month or 999€</p>
      </div>
    </section>
  );
};

export default Hero;
