"use client";

import { Button, ButtonProps } from "@/src/shared/ui";

import { useRouter } from "next/navigation";

interface ButtonLinkProps extends ButtonProps {
  link: string;
}

export const ButtonLink = ({ variant, size, children, link, ...props }: ButtonLinkProps) => {
  const router = useRouter();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => {
        router.push(link);
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
