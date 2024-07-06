import { ClassNameOverride } from "@/types";
import React from "react";

type Props = {
  className?: String;
  width?: number;
  strokeWidth?: number;
};

export default function StarIcon({ className, strokeWidth, width }: Props) {
  const classNameProp: ClassNameOverride = className ? { className } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 32}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1.5}
      stroke="currentColor"
      {...classNameProp}
    >
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(190,24,93,1)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        fill="url(#myGradient)"
      />
    </svg>
  );
}
