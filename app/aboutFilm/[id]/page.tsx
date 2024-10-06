"use server";

import { CardCinema } from "@/src/entities/CardCinema";
import { FilmDescription } from "@/src/entities/filmDescription";

import { cinemaApi } from "@/src/shared/api";
import { FilmProps } from "@/src/shared/types";
import { ButtonBack } from "@/src/features/buttonBack";
import { ChevronLeft } from "lucide-react";

interface AboutFilm {
  params: { id: string };
}

const AboutFilm = async ({ params }: AboutFilm) => {
  const { country, description, genres, id, img, name, originalName, releaseDate, userRatings } = (
    await cinemaApi<{ film: FilmProps }>(`film/${params.id}`)
  ).film;

  return (
    <main>
      <ButtonBack variant="ghost" size="ghost" className="mb-6">
        <ChevronLeft className="mr-1 size-6 text-indicator-medium" />
        Назад
      </ButtonBack>

      <div>
        <CardCinema
          src={img}
          country={country.name}
          genres={genres[0]}
          releaseDate={releaseDate}
          subtitle={originalName}
          title={name}
          userRating={userRatings.kinopoisk}
        />
        <FilmDescription className="mt-6">{description}</FilmDescription>

        <div>
          <h2>Расписание</h2>
        </div>
      </div>
    </main>
  );
};

export default AboutFilm;
