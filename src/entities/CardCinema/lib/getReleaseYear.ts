export const getReleaseYear = (releaseDate: string) => {
  if (releaseDate === "-") {
    return "Неизвестно";
  }

  const year = releaseDate.slice(-4);

  return year;
};
