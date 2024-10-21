"use client";

import { useState } from "react";

import { Button } from "@/src/shared/ui";

interface FilmDescriptionProps {
  description: string;
}

export const FilmDescription = ({ description }: FilmDescriptionProps): JSX.Element => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p
        className={`${showMore ? "line-clamp-none" : "line-clamp-3"} text-1-secondary-regular text-ellipsis md:w-[46.875vw] lg:w-[31.25vw] xl:w-[37.5vw] desktop:w-[44.444vw]`}
      >
        {description}
      </p>
      <Button
        variant="ghost"
        size="ghost"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Свернуть" : "Развернуть"}
      </Button>
    </div>
  );
};
