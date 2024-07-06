import React from "react";

type Props = { className?: string; text: string; onClick?: () => void };

export default function ButtonCTA({ className, text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-pink-700 border-2 rounded-lg border-pink-700 w-fit px-4 py-2 text-xl shadow-md text-white m-auto transition-all hover:text-pink-700 hover:bg-white animate-bounce${
        className ? " " + className : ""
      }`}
    >
      {text}
    </button>
  );
}
