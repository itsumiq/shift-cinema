import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export const Header = (): JSX.Element => {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
