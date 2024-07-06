import React from "react";
import HeartIcon from "./UI/HeartIcon";
import { roboto } from "@/app_config";

type Props = { absoluteToBottom?: boolean };
export default function Footer({ absoluteToBottom }: Props) {
  return (
    <footer
      className={`${absoluteToBottom ? "absolute bottom-0" : ""} ${
        roboto.className
      } font-bold text-center py-2 bg-gray-800 text-white text-sm md:text-[1.05rem] opacity-90 w-full`}
    >
      <p>
        Handcrafted with&nbsp;
        <span>
          <HeartIcon className="w-5 md:w-6 inline-block translate-y-[-2px]" />
        </span>
        &nbsp;in NY, USA | &copy; {new Date().getFullYear()} by Omar Moquete.
        All rights reserved.
      </p>
    </footer>
  );
}
