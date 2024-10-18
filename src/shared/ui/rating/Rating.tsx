import { Star } from "./Star";

interface RatingProps {
  countFilledStar: number;
  userRating: string;
}

const MAX_STAR = 5;

export const Rating = ({ countFilledStar, userRating }: RatingProps): JSX.Element => {
  const countUnfilledStar = MAX_STAR - countFilledStar;

  const filledStarLst = Array(countFilledStar).fill(<Star color="#FFB219" key={Math.random()} />);
  const unfilledStarLst = Array(countUnfilledStar).fill(<Star key={Math.random()} />);

  return (
    <div>
      <ul className="flex">
        {filledStarLst} {unfilledStarLst}
      </ul>
      <p className="text-2-tertiary-regular mt-1">Kinopoink - {userRating}</p>
    </div>
  );
};
