import { Star } from "./Star";

interface StarListProps {
  countFilledStar: number;
}

const MAX_STAR = 5;

export const StarList = ({ countFilledStar }: StarListProps): JSX.Element => {
  const countUnfilledStar = MAX_STAR - countFilledStar;

  const filledStarLst = Array(countFilledStar).fill(<Star color="#FFB219" key={Math.random()} />);
  const unfilledStarLst = Array(countUnfilledStar).fill(<Star key={Math.random()} />);

  return (
    <ul className="flex">
      {filledStarLst} {unfilledStarLst}
    </ul>
  );
};
