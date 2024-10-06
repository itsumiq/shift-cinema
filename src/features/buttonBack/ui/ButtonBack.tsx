"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "@/src/shared/ui";

interface ButtonBackProps extends ButtonProps {}

export const ButtonBack = ({ children, variant, size, className, ...props }: ButtonBackProps) => {
  const router = useRouter();

  return (
    <Button
      className={`flex ${className}`}
      variant={variant}
      size={size}
      onClick={() => {
        router.back();
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
