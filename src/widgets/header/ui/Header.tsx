import { User } from "@/src/shared/ui";
import { Ticket } from "@/src/shared/ui";
import { Logo } from "@/src/shared/ui";
import { Authorization } from "@/src/features/authorization";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center gap-x-4 py-3">
      <div className="flex justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <ul className="flex gap-x-4">
          <li>
            <Link href="/profile" className="flex flex-col items-center">
              <User />
              <p className="text-xs font-medium text-text-secondary">Профиль</p>
            </Link>
          </li>
          <li>
            <Link href="/tickets" className="flex flex-col items-center">
              <Ticket />
              <p className="text-xs font-medium text-text-secondary">Билеты</p>
            </Link>
          </li>
        </ul>
      </div>

      <Authorization />
    </header>
  );
};
