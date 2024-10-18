import Link from "next/link";
import { ImageWithDetail } from "@/src/shared/ui";
import { Title } from "@/src/shared/ui";
import { Rating } from "@/src/shared/ui";

import { formattingFilmInfo } from "../lib/formattingFilmInfo";
import { formattingAgeRating } from "../lib/formattingAgeRating";

interface CardFilmProps {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  releaseData: string;
  country: string;
  ageRatingLetter: string;
  imgSrc: string;
  userRating: string;
}

export const CardFilm = ({
  id,
  title,
  subtitle,
  genre,
  releaseData,
  country,
  ageRatingLetter,
  imgSrc,
  userRating,
}: CardFilmProps): JSX.Element => {
  const filmInfo = formattingFilmInfo(releaseData, country);
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
