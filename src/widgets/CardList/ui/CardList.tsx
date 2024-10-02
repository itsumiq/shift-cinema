"use server";

import { CardCinema } from "@/src/entities/CardCinema";
import { Rating } from "@/src/entities/rating";

import { api } from "@/src/shared/api";
import { FilmsListProps } from "@/src/shared/types";

export const CardList = async () => {
  const films = (await api<FilmsListProps>("cinema/today")).films;

  return (
    <ul>
      {films.map(({ id, img, country, genres, releaseDate, name, description, userRatings }) => (
        <li key={id}>
          <CardCinema
            src={img}
            country={country.name}
            genres={genres[0]}
            releaseDate={releaseDate}
            title={name}
            subtitle={description}
            userRating={userRatings.kinopoisk}
          >
            <Rating userRating={userRatings.kinopoisk} />
          </CardCinema>
        </li>
      ))}
    </ul>
  );
};
