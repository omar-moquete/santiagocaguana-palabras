import { elMessiri } from "@/app_config";
import React from "react";

type props = {};
export default function OutroSection({}: props) {
  return (
    <section className="text-4xl my-16">
      <h1 className={`${elMessiri.className} text-center text-2xl md:text-4xl`}>
        Toca, mueve e inspira
      </h1>
    </section>
  );
}
