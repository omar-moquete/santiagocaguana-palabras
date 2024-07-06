import { elMessiri, ratings } from "@/app_config";
import React from "react";

import RatingList from "./UI/RatingList";

type props = {};
export default function ReviewSection({}: props) {
  return (
    <section className="text-sm md:text-xl mt-8 py-6 pt-16 bg-blackGradient bg-opacity-40">
      <h1 className={`${elMessiri.className} text-center text-4xl mb-8`}>
        Clientes felices
      </h1>
      <RatingList ratings={ratings}></RatingList>
    </section>
  );
}
