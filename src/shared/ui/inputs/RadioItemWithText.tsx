import { RadioItem, RadioItemProps } from "./RadioItem";

interface RadioItemWithText extends RadioItemProps {
  title: string;
}

export const RadioItemWithText = ({ title, id, ...props }: RadioItemWithText): JSX.Element => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <RadioItem {...props} id={id} />
      <label htmlFor={id} className="absolute cursor-pointer text-sm font-normal text-text-primary">
        {title}
      </label>
    </div>
  );
};
