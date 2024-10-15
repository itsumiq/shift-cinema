export const api = async <T>(path: string): Promise<T> => {
  const response = await fetch(`https://shift-backend.onrender.com/${path}`);

  const data: T = await response.json();

  return data;
};
