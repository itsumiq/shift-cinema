import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const HeaderMobile = (): JSX.Element => {
  return (
    <div className="flex items-center px-4 py-3 lg:hidden">
      <Link href="">
        <ChevronLeft className="text-indicator-light size-6" />
      </Link>
      <h2 className="ml-8">Афиша</h2>
    </div>
  );
};
