import { Star } from "@/src/shared/ui";

import { getFillStar } from "../lib/getFillStar";

interface RatingProps {
  userRating: string;
}

export const Rating = ({ userRating }: RatingProps) => {
  const MAX_RATING = 5;
  const countFilledStar = getFillStar(userRating);
  const countUnfilledStar = MAX_RATING - countFilledStar;

  const filledStar = Array.from({ length: countFilledStar }, () => (
    <li key={Math.random()}>
      <Star fill="#FFB219" />
    </li>
  ));
  const unFilledStar = Array.from({ length: countUnfilledStar }, (x: number) => (
    <li key={Math.random()}>
      <Star />
    </li>
  ));

  return (
    <ul className="flex">
      {filledStar} {unFilledStar}
    </ul>
  );
};
