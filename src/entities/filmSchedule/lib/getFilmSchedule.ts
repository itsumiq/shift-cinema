import { cinemaApi } from "@/src/shared/api";
import { ScheduleProps } from "@/src/shared/types";

export const getFilmSchedule = async (path: string) => {
  const response = (await cinemaApi<ScheduleProps>(`film/${path}/schedule`)).schedules;

  return response;
};
