import React from "react";

interface VideoIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const VideoIcon: React.FC<VideoIconProps> = ({
  width = 42,
  height = 32,
  color = "#FFCC00",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30.2812 10.4719L40.2258 4.31904V27.563L30.2812 21.4102M7.07721 30.2976H24.3145C27.2437 30.2976 29.6183 27.849 29.6183 24.8284V7.05363C29.6183 4.03309 27.2437 1.58446 24.3145 1.58446H7.07721C4.14802 1.58446 1.77344 4.03309 1.77344 7.05363V24.8284C1.77344 27.849 4.14802 30.2976 7.07721 30.2976Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VideoIcon;
