"use server";

import { CardFilm } from "@/src/entities/film";

import { getCinema } from "@/src/shared/api";
import { CinemaTodayProps } from "@/src/shared/types";

export const CardList = async (): Promise<JSX.Element> => {
  const response = await getCinema<CinemaTodayProps>("today");
  const cinemaToday = response.films;

  if (!response.success) {
    return <div>Ошибка</div>;
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(328px,auto))] gap-y-6 max-md:justify-items-center md:justify-between lg:grid-cols-[repeat(auto-fill,minmax(300px,auto))]">
      {cinemaToday.map(
        ({ id, name, originalName, genres, country, releaseDate, ageRating, img, userRatings }) => (
          <li key={id}>
            <CardFilm
              id={id}
              title={name}
              subtitle={originalName}
              genre={genres[0]}
              country={country.name}
              releaseDate={releaseDate}
              key={id}
              ageRatingLetter={ageRating}
              imgSrc={img}
              userRating={userRatings.kinopoisk}
            />
          </li>
        )
      )}
    </ul>
  );
};
