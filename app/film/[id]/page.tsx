"use server";

import { FilmWithDescription } from "@/src/entities/film";

import { getCinema } from "@/src/shared/api";
import { FilmDetailProps } from "@/src/shared/types";

const FilmPage = async ({ params }: { params: { id: string } }): Promise<JSX.Element> => {
  const response = await getCinema<FilmDetailProps>(`film/${params.id}`);
  const filmDetail = response.film;

  return (
    <main className="grid justify-center md:justify-stretch">
      <FilmWithDescription
        title={filmDetail.name}
        subtitle={filmDetail.originalName}
        genre={filmDetail.genres[0]}
        imgSrc={filmDetail.img}
        ageRatingLetter={filmDetail.ageRating}
        country={filmDetail.country.name}
        releaseDate={filmDetail.releaseDate}
        userRating={filmDetail.userRatings.kinopoisk}
        description={filmDetail.description}
      />
    </main>
  );
};

export default FilmPage;
