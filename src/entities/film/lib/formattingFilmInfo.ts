export const formattingFilmInfo = (date: string, country: string): string => {
  let filmInfo: string;

  if (date === "-") {
    date = "";
    filmInfo = `${country}`;
  } else {
    const year = date.slice(-4);
    filmInfo = `${country}, ${year}`;
  }

  if (filmInfo.length > 14) {
    filmInfo = filmInfo.slice(0, 10) + "...";
  }

  return filmInfo;
};
