export interface FilmsListProps {
  success: boolean;
  films: FilmProps[];
}

interface FilmProps {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  img: string;
  genres: string[];
  country: CountryProps;
  userRatings: UserRatingsProps;
}

interface CountryProps {
  id: number;
  code: string;
  code2: string;
  name: string;
}

interface UserRatingsProps {
  kinopoisk: string;
  imdb: string;
}
