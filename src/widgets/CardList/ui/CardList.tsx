"use server";

import { CardCinema } from "@/src/entities/CardCinema";
import { ButtonLink } from "@/src/features/buttonLink";

import { api } from "@/src/shared/api";
import { FilmsListProps } from "@/src/shared/types";

export const CardList = async () => {
  const films = (await api<FilmsListProps>("cinema/today")).films;

  return (
    <ul className="flex flex-col gap-y-6">
      {films.map(({ id, img, country, genres, releaseDate, name, description, userRatings }) => (
        <li key={id} className="flex flex-col gap-y-4">
          <CardCinema
            src={img}
            country={country.name}
            genres={genres[0]}
            releaseDate={releaseDate}
            title={name}
            subtitle={description}
            userRating={userRatings.kinopoisk}
          />
          <ButtonLink variant="default" size="default" link={`/aboutFilm/${id}`}>
            Подробнее
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
};
