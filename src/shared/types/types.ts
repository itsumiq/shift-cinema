// FILM DATE

export interface FilmsListProps {
  success: boolean;
  films: FilmProps[];
}

export interface FilmProps {
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

// FILM SCHEDULE

export interface ScheduleProps {
  success: boolean;
  schedules: SchedulesProps[];
}

export interface SchedulesProps {
  date: string;
  seances: SeancesProps;
}

export interface SeancesProps {
  time: string;
  hall: { name: string; places: PlacesProps[] };
  payedTickets: string[];
}

interface PlacesProps {
  price: number;
  type: string;
}
