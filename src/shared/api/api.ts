export const api = async <T>(path: string): Promise<T> => {
  const url = `https://shift-backend.onrender.com/${path}`;

  const request = await fetch(url);
  const response: T = await request.json();

  return response;
};
