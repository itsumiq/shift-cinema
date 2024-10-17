"use client";

import { useState, useEffect } from "react";

interface FooterProviderProps {
  children: React.ReactNode;
}

export const FooterProvider = ({ children }: FooterProviderProps): JSX.Element => {
  const [showFooter, setShowFooter] = useState(true);

  const handleResize = (e: UIEvent) => {
    const target = e.target as Window;

    if (target.innerWidth < 1024) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{showFooter && children}</>;
};
