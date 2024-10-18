import Link from "next/link";
import { ImageWithDetail } from "@/src/shared/ui";
import { Title } from "@/src/shared/ui";
import { Rating } from "@/src/shared/ui";

import { formattingFilmInfo } from "../lib/formattingFilmInfo";
import { formattingAgeRating } from "../lib/formattingAgeRating";
import { FilmProps } from "../types/types";

interface CardFilmProps extends FilmProps {
  id: string;
}

export const CardFilm = ({
  id,
  title,
  subtitle,
  genre,
  releaseDate,
  country,
  ageRatingLetter,
  imgSrc,
  userRating,
}: CardFilmProps): JSX.Element => {
  const filmInfo = formattingFilmInfo(releaseDate, country);
  const ageRating = formattingAgeRating(ageRatingLetter);
  const rating = Math.floor(Number(userRating) / 2);

  return (
    <div className="flex w-[328px] flex-col gap-y-4 lg:w-[300px]">
      <ImageWithDetail filmInfo={filmInfo} genre={genre} imgSrc={imgSrc} />

      <Title title={title} ageRating={ageRating} subtitle={subtitle} />

      <Rating countFilledStar={rating} userRating={userRating} />

      <Link
        href={`/film/${id}`}
        className="text-1-white-semi flex h-[56px] w-full items-center justify-center rounded-2xl bg-bg-brand"
      >
        Подробнее
      </Link>
    </div>
  );
};
