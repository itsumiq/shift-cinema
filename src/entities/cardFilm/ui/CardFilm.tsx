import Image from "next/image";
import Link from "next/link";
import { StarList } from "./StarList";

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
    <div className="flex flex-col gap-y-4">
      <div className="relative h-[300px] w-full">
        <Image
          className="h-full w-full rounded-lg bg-slate-500"
          src={`https://shift-backend.onrender.com${imgSrc}`}
          width={606}
          height={903}
          alt="film image"
          priority={true}
        ></Image>

        <div className="absolute bottom-0 right-0 flex h-[48px] w-[110px] flex-col items-center justify-center rounded-br-lg rounded-tl-lg bg-bg-secondary">
          <span className="text-2-primary-medium">{genre}</span>
          <span className="text-2-primary-regular text-nowrap">{filmInfo}</span>
        </div>
      </div>

      <div>
        <h3 className="overflow-hidden text-ellipsis text-nowrap">
          {title} ({ageRating})
        </h3>
        <p className="text-2-tertiary-regular mt-1">{subtitle}</p>
      </div>

      <div>
        <StarList countFilledStar={rating} />
        <p className="text-2-tertiary-regular mt-1">Kinopoink - {userRating}</p>
      </div>

      <Link
        href={`/film/${id}`}
        className="bg-bg-brand text-1-white-semi flex h-[56px] w-full items-center justify-center rounded-2xl"
      >
        Подробнее
      </Link>
    </div>
  );
};
