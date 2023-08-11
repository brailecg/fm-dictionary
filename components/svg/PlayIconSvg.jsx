import React, { useState } from "react";

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

export const PlayIconSvgMini = () => {
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const handleMouseEnter = () => setIsPlayHovered(true);
  const handleMouseLeave = () => setIsPlayHovered(false);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
    </div>
  );
};
