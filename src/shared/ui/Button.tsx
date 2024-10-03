import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "bg-bg-brand text-white",
    },
    size: {
      default: "h-[3.5rem] w-full text-base font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ variant, size, ...props }: ButtonProps) => {
  return <button className={buttonVariants({ variant, size })} {...props}></button>;
};
