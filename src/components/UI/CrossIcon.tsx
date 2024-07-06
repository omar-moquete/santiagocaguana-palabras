import { ClassNameOverride } from "@/types";
import React from "react";

type Props = {
  onClick?: () => void;
  strokeWidth?: number | string;
  className?: string;
};

export default function CrossIcon({ strokeWidth, onClick, className }: Props) {
  // Prevents empty "class" field in DOM, in case a className is not passed.
  const classNameProp: ClassNameOverride = className ? { className } : {};
  const emptyFn = () => {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1.5}
      stroke="currentColor"
      {...classNameProp}
      onClick={onClick || emptyFn}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
