import React from "react";
import logoImg from "../img/logo.png";
import { elMessiri } from "@/app_config";

const sizeClasses = {
  sm: {
    image: "w-24", // Adjust as needed
    text: "text-3xl", // Adjust as needed
    subtext: "text-xs md:text-sm", // Adjust as needed
  },
  md: {
    image: "w-24 md:w-32", // Adjust as needed
    text: "text-4xl", // Adjust as needed
    subtext: "text-sm md:text-base", // Adjust as needed
  },
  lg: {
    image: "w-32 md:w-40", // Adjust as needed
    text: "text-5xl", // Adjust as needed
    subtext: "text-base md:text-lg", // Adjust as needed
  },
  xl: {
    image: "w-36 md:w-44", // Adjust as needed
    text: "text-6xl", // Adjust as needed
    subtext: "text-lg md:text-xl mt-1", // Adjust as needed
  },
};

type Props = {
  size: "sm" | "md" | "lg" | "xl";
  showSubtext?: boolean;
};
export default function Logo({ size, showSubtext = true }: Props) {
  const { image, text, subtext } = sizeClasses[size] || sizeClasses.xl;

  return (
    <div className="flex flex-col items-center py-4 backdrop-blur-sm z-10 bg-black bg-opacity-60 w-full">
      <div className="flex items-center gap-4 w-fit">
        <img
          src={logoImg.src}
          alt="logo"
          className={`m-auto inline-block h-auto ${image}`}
        />
        <h1 className={`${elMessiri.className} ${text} mt-2 w-min`}>
          SANTIAGO CAGUANA
        </h1>
      </div>
      {showSubtext && (
        <p className={`leading-6 mt-1 text-center w-full${subtext}`}>
          Coach transformacional
        </p>
      )}
    </div>
  );
}
