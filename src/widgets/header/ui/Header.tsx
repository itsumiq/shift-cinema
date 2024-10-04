import { User } from "@/src/shared/ui";
import { Ticket } from "@/src/shared/ui";
import { Logo } from "@/src/shared/ui";
import { Authorization } from "@/src/features/authorization";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex gap-x-4">
        <Logo />

        <ul className="flex gap-x-4">
          <li>
            <Link href="" className="flex flex-col items-center">
              <User />
              <p className="text-xs font-medium text-text-secondary">Профиль</p>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Ticket />
            <p className="text-xs font-medium text-text-secondary">Билеты</p>
          </li>
        </ul>
      </div>

      <Authorization />
    </header>
  );
};
