export const formattingAgeRating = (letterRating: string): string => {
  let rating = "";

  switch (letterRating) {
    case "G":
      rating = "3+";
      break;

    case "PG":
      rating = "6+";
      break;

    case "PG-13":
      rating = "13+";
      break;

    case "R":
      rating = "16+";
      break;

    case "NC17":
      rating = "18+";
      break;
  }

  return rating;
};
