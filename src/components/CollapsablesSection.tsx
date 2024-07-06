import React from "react";
import Accordion from "./UI/Accordion";
import { collapsableItems, elMessiri } from "@/app_config";

export default function CollapsablesSection() {
  return (
    <div className="text-gray-800 bg-white p-6">
      <h1
        className={`${elMessiri.className} text-2xl md:text-4xl text-center mb-10`}
      >
        Preguntas frecuentes
      </h1>
      <Accordion items={collapsableItems} />
    </div>
  );
}
