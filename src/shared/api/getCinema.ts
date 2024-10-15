import { api } from "./api";

export const getCinema = async <T>(path: string): Promise<T> => {
  const data: T = await api<T>(`cinema/${path}`);

  return data;
};
