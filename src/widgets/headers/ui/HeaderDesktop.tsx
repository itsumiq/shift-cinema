import { Logo } from "@/src/shared/ui";
import { ItemMenu } from "@/src/entities/itemMenu";

// icons
import { User } from "lucide-react";
import { Ticket } from "lucide-react";
import { LogOut } from "lucide-react";

const ICONSTYLE = "text-indicator-normal size-6";

export const HeaderDesktop = () => {
  return (
    <div className="mx-auto hidden w-[60rem] items-center justify-between py-[1.375rem] lg:flex">
      <div className="flex items-center gap-x-8">
        <Logo />
        <ItemMenu link="/profile" title="профиль">
          <User className={ICONSTYLE} />
        </ItemMenu>
        <ItemMenu link="/tickets" title="билеты">
          <Ticket className={ICONSTYLE} />
        </ItemMenu>
      </div>

      <button className="flex gap-x-4">
        <LogOut className={ICONSTYLE} />
        <p className="text-1 text-text-secondary font-medium lowercase first-letter:uppercase">
          Выйти
        </p>
      </button>
    </div>
  );
};
