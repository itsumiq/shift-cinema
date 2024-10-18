import Image from "next/image";

interface ImageWithDetail {
  imgSrc: string;
  genre: string;
  filmInfo: string;
}

export const ImageWithDetail = ({ imgSrc, genre, filmInfo }: ImageWithDetail): JSX.Element => {
  return (
    <div className="relative h-[300px] w-full">
      <Image
        className="h-full w-full rounded-xl"
        src={`https://shift-backend.onrender.com${imgSrc}`}
        width={606}
        height={903}
        alt="film image"
        priority={true}
      ></Image>

      <div className="absolute bottom-0 right-0 flex h-[48px] w-[110px] flex-col items-center justify-center rounded-br-lg rounded-tl-lg bg-bg-secondary">
        <span className="text-2-primary-medium">{genre}</span>
        <span className="text-2-primary-regular text-nowrap">{filmInfo}</span>
      </div>
    </div>
  );
};
