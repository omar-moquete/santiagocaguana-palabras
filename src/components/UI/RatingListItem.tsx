import React from "react";
import StarIcon from "./StarIcon";
import { FaQuoteLeft } from "react-icons/fa";
import { RatingData } from "../../types";

export default function RatingListItem({
  rating,
  title,
  comment,
  imgUrl,
  name,
  occupation,
}: RatingData) {
  return (
    <li className="flex flex-col justify-between p-3 md:p-6 w-40 min-h-[300px] md:min-h-[380px] md:w-80 md:gap-6 bg-white text-gray-800 rounded-md shadow-xl gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <FaQuoteLeft />
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl md:text-2xl text-yellow-400">
              {rating}
            </span>
            <StarIcon className="text-yellow-400 fill-yellow-400 w-6 md:w-8" />
          </div>
        </div>
        <h3 className="text-lg md:text-2xl font-bold">{title}</h3>
        <p>{comment}</p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={imgUrl}
          alt="Rating author photo"
          className="rounded-full w-10 md:w-16 h-10 md:h-16"
        />
        <div className="mt-1">
          <h4 className="text-l font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{occupation}</p>
        </div>
      </div>
    </li>
  );
}
