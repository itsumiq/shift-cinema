import { Button, ButtonProps } from "@/src/shared/ui";

interface ButtonBackProps extends ButtonProps {}

export const ButtonBack = ({ children, variant, size, ...props }: ButtonBackProps) => {
  return (
    <Button className="flex" variant={variant} size={size} {...props}>
      {children}
    </Button>
  );
};
