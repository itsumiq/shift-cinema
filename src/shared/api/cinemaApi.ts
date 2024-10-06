import { api } from "./api";

export const cinemaApi = async <T>(path: string): Promise<T> => {
  const response = await api<T>(`cinema/${path}`);

  return response;
};
