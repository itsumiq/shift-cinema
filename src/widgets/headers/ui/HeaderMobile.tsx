import { ChevronLeft } from "lucide-react";

export const HeaderMobile = () => {
  return (
    <header className="flex items-center">
      <ChevronLeft className="text-indicator-light size-6" />
      <h2 className="ml-8">Афиша</h2>
    </header>
  );
};
