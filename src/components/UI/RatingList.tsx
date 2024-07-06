import React from "react";
import RatingListItem from "./RatingListItem";
import { RatingData } from "../../types";

type Props = {
  ratings: RatingData[];
};
export default function RatingList({ ratings }: Props) {
  return (
    <ul className="flex gap-4 md:gap-5 justify-center flex-wrap">
      {ratings.map((rating, i) => (
        <RatingListItem
          key={i} // "i" can be used because this list renders only once.
          rating={rating.rating}
          title={rating.title}
          comment={rating.comment}
          imgUrl={rating.imgUrl}
          name={rating.name}
          occupation={rating.occupation}
        />
      ))}
    </ul>
  );
}
