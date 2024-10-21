import { Header } from "@/src/widgets/headers";
import { FooterMobile } from "@/src/widgets/footers";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="block overflow-auto overflow-x-hidden text-[16px] xl:text-[16px]">
      <body className={`${inter.className} antialiased`}>
        <div className="grid pb-[4.375rem] lg:pb-[1.375rem]">
          <div className="border-indicator-border-light lg:border-b">
            <Header />
          </div>

          {/* <div className="mx-auto w-[91.1112vw] lg:w-[62.5vw] desktop:w-[66.667vw]"> */}
          {children}
          <FooterMobile />
          {/* </div> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
