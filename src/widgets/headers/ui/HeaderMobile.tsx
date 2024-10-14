import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const HeaderMobile = (): JSX.Element => {
  return (
    <div className="flex items-center py-3 lg:hidden">
      <Link href="/profile">
        <ChevronLeft className="size-6 text-indicator-light" />
      </Link>
      <h2 className="ml-8">Афиша</h2>
    </div>
  );
};
