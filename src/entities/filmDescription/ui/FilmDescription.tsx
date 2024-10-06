"use client";

import { useState } from "react";

import { Button } from "@/src/shared/ui";

interface FilmDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const FilmDescription = ({ children, className }: FilmDescriptionProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <p
        className={`${showMore ? "line-clamp-none" : "line-clamp-3"} text-ellipsis text-base text-text-secondary ${className}`}
      >
        {children}
      </p>
      <Button
        variant="ghost"
        size="ghost-2"
        className="text-text-quartenery"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Свернуть" : "Развернуть"}
      </Button>
    </div>
  );
};
