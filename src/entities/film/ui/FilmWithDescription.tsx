import { ImageWithDetail } from "@/src/shared/ui";
import { Title } from "@/src/shared/ui";
import { Rating } from "@/src/shared/ui";
import { FilmDescription } from "./FilmDescription";

import { formattingFilmInfo } from "../lib/formattingFilmInfo";
import { formattingAgeRating } from "../lib/formattingAgeRating";
import { FilmProps } from "../types/types";

interface FilmWithDescriptionProps extends FilmProps {
  description: string;
}

export const FilmWithDescription = ({
  genre,
  imgSrc,
  ageRatingLetter,
  country,
  releaseDate,
  subtitle,
  title,
  userRating,
  description,
}: FilmWithDescriptionProps): JSX.Element => {
  const filmInfo = formattingFilmInfo(releaseDate, country);
  const ageRating = formattingAgeRating(ageRatingLetter);
  const rating = Math.floor(Number(userRating) / 2);

  return (
    <div className="flex w-[328px] flex-col gap-y-4 md:w-full md:flex-row md:justify-between">
      <div className="shrink-0 md:w-[300px]">
        <ImageWithDetail filmInfo={filmInfo} genre={genre} imgSrc={imgSrc} />
      </div>

      <div className="flex flex-col gap-y-4">
        <Title ageRating={ageRating} subtitle={subtitle} title={title} />
        <Rating countFilledStar={rating} userRating={userRating} />
        <FilmDescription description={description} />
      </div>
    </div>
  );
};
