import Image from "next/image";

import { getReleaseYear } from "../lib/getReleaseYear";

interface CardCinemaProps {
  src: string;
  genres: string;
  releaseDate: string;
  country: string;
  title: string;
  subtitle: string;
  userRating: string;
  children: React.ReactNode;
}

export const CardCinema = ({
  src,
  genres,
  releaseDate,
  country,
  title,
  subtitle,
  userRating,
  children,
}: CardCinemaProps) => {
  const year = getReleaseYear(releaseDate);
  const cinemaInformation = `${country}, ${year}`;

  return (
    <div className="flex w-full flex-col gap-y-4">
      <div className="relative">
        <Image
          src={`https://shift-backend.onrender.com${src}`}
          width={606}
          height={903}
          alt="film image"
          className="h-[300px] w-[328px]"
          priority={true}
        />
        <div className="absolute bottom-0 right-0 flex h-12 w-[6.875rem] flex-col gap-y-1 rounded-tl-lg bg-bg-secondary py-2">
          <p className="text-1 mx-auto font-medium">{genres}</p>
          <p className="text-1 w-full overflow-hidden text-ellipsis text-nowrap text-center">
            {cinemaInformation}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div>
          <h3>{title}</h3>
          <p className="text-1 mt-1 overflow-hidden text-ellipsis text-nowrap text-text-tertiary">
            {subtitle}
          </p>
        </div>

        <div>
          {children}
          <p className="text-1 mt-1 text-text-tertiary">Kinopoisk - {userRating}</p>
        </div>
      </div>
    </div>
  );
};
