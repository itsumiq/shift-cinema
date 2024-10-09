"use server";

import { Date } from "./Date";

import { getFilmSchedule } from "../lib/getFilmSchedule";

interface FilmScheduleProps {
  filmId: string;
}

export const FilmSchedule = async ({ filmId }: FilmScheduleProps) => {
  const filmSchedule = await getFilmSchedule(filmId);

  return (
    <div className="relative left-0 flex w-screen overflow-x-scroll">
      <div className="min-w-4"></div>
      <div className="flex h-[2.75rem] rounded-2xl bg-bg-secondary p-[0.125rem]">
        <Date schedule={filmSchedule} />
      </div>
      <div className="min-w-4"></div>
    </div>
  );
};
