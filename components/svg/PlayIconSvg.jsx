import React, { useEffect, useState, useRef } from "react";

export const PlayIconSvgMobile = () => {
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const handleMouseEnter = () => setIsPlayHovered(true);
  const handleMouseLeave = () => setIsPlayHovered(false);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none">
        <circle
          cx={24}
          cy={24}
          r={24}
          fill="#A445ED"
          opacity={isPlayHovered ? 1 : 0.25}
        />
        <path
          fill={isPlayHovered ? "white" : "#A445ED"}
          fillRule="evenodd"
          d="M19 18v13l13-6.5L19 18Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export const PlayIconSvgLarge = () => {
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const handleMouseEnter = () => setIsPlayHovered(true);
  const handleMouseLeave = () => setIsPlayHovered(false);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={75}
        height={75}
        fill="none">
        <circle
          cx={37.5}
          cy={37.5}
          r={37.5}
          fill="#A445ED"
          opacity={isPlayHovered ? 1 : 0.25}
        />
        <path
          fill={isPlayHovered ? "white" : "#A445ED"}
          fillRule="evenodd"
          d="M29 27v21l21-10.5L29 27Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export const PlayIconSvgMini = ({ audioUrl }) => {
  const [isPlayHovered, setIsPlayHovered] = useState(false);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => setIsPlayHovered(true);
  const handleMouseLeave = () => setIsPlayHovered(false);

  function getFileExtension(filename) {
    // Get the last index of the dot (.) character in the filename
    const lastDotIndex = filename.lastIndexOf(".");

    if (lastDotIndex === -1) {
      // No dot (.) character found, so no extension
      return "";
    } else {
      // Use substring to extract the extension
      const extension = filename.substring(lastDotIndex + 1);
      return extension;
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleAudio}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none">
        <circle
          cx={10}
          cy={10}
          r={10}
          fill="#A445ED"
          opacity={isPlayHovered ? 1 : 0.25}
        />
        <path
          fill={isPlayHovered ? "white" : "#A445ED"}
          fillRule="evenodd"
          d="M7.917 7.5v5.417l5.416-2.709L7.917 7.5Z"
          clipRule="evenodd"
        />
      </svg>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};
