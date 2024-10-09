import { cva, VariantProps } from "class-variance-authority";

const radioItemVariants = cva("rounded-2xl cursor-pointer", {
  variants: {
    variant: {
      withTextBig: "text-text-primary bg-inherit checked:bg-white",
    },
    scale: {
      withTextBig: "text-sm font-normal h-full w-[5.938rem]",
    },
  },
  defaultVariants: {
    variant: "withTextBig",
    scale: "withTextBig",
  },
});

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioItemVariants> {
  value: string;
  title: string;
  currentDate: string;
}

export const RadioItem = ({
  variant,
  scale,
  name,
  value,
  id,
  title,
  currentDate,
  ...props
}: CheckboxProps) => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <input
        type="radio"
        className={radioItemVariants({ variant, scale })}
        name={name}
        value={value}
        id={id}
        checked={value === currentDate ? true : false}
        {...props}
      />
      <label htmlFor={id} className="absolute cursor-pointer text-sm font-normal text-text-primary">
        {title}
      </label>
    </div>
  );
};
