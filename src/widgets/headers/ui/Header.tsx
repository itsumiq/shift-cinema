import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export const Header = (): JSX.Element => {
  return (
    <header className="mx-auto w-[91.1112vw] lg:w-[62.5vw] desktop:w-[66.667vw]">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
