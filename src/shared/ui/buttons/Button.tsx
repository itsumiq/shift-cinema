import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "bg-bg-brand text-white",
      ghost: "bg-inherit text-text-quartenery",
    },
    size: {
      default: "h-[3.5rem] w-full text-base font-semibold",
      ghost: "text-base font-normal",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
