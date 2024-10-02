export const getFillStar = (rating: string) => {
  let grade = parseInt(rating, 10);
  grade = Math.floor(grade / 2);

  return grade;
};
