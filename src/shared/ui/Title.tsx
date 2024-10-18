interface TitleProps {
  title: string;
  ageRating: string;
  subtitle: string;
}

export const Title = ({ title, ageRating, subtitle }: TitleProps): JSX.Element => {
  return (
    <div>
      <h3 className="overflow-hidden text-ellipsis text-nowrap">
        {title} ({ageRating})
      </h3>
      <p className="text-2-tertiary-regular mt-1">{subtitle}</p>
    </div>
  );
};
