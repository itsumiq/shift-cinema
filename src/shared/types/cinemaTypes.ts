interface FilmProps {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: null; // remake later
  directors: null; // remake later
  runtime: number;
  ageRating: string;
  genres: string[];
  userRatings: { kinopoisk: string; imdb: string };
  img: string;
  country: { id: string; code: string; code2: string; name: string };
}

export interface CinemaTodayProps {
  success: boolean;
  films: FilmProps[];
}

export interface FilmDetailProps {
  success: boolean;
  film: FilmProps;
}
