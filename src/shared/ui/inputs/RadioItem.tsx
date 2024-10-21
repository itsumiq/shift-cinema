import { cva, VariantProps } from "class-variance-authority";

const radioItemVariants = cva("rounded-2xl cursor-pointer appearance-none", {
  variants: {
    variant: {
      withText: " bg-inherit checked:bg-white",
    },
    scale: {
      withText: "text-sm font-normal h-full px-4",
    },
  },
  defaultVariants: {
    variant: "withText",
    scale: "withText",
  },
});

export interface RadioItemProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioItemVariants> {
  currentValue: string;
}

export const RadioItem = ({
  variant,
  scale,
  className,
  currentValue,
  value,
  ...props
}: RadioItemProps): JSX.Element => {
  return (
    <input
      type="radio"
      className={radioItemVariants({ variant, scale, className })}
      checked={value === currentValue ? true : false}
      value={value}
      {...props}
    />
  );
};
