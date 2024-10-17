import Link from "next/link";

// icons
import { Clapperboard } from "lucide-react";
import { Ticket } from "lucide-react";
import { User } from "lucide-react";

export const FooterMobile = () => {
  return (
    <footer className="text-4-tertiary-regular fixed bottom-0 left-0 h-[58px] w-full border-t border-indicator-border-light bg-bg-primary px-7 lg:hidden">
      <ul className="flex h-full items-center justify-between">
        <li>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Clapperboard className="size-6" />
            <span>Афиша</span>
          </Link>
        </li>
        <li>
          <Link href="/tickets" className="flex flex-col items-center justify-center">
            <Ticket className="size-6" />
            <span>Билеты</span>
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex flex-col items-center justify-center">
            <User className="size-6" />
            <span>Профиль</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
