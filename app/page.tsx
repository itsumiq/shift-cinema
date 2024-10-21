import { CardList } from "@/src/widgets/cardList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHIFT CINEMA | Афиша",
  description: "List of films available for ticket purchase",
};

const Home = (): JSX.Element => {
  return (
    <div className="mx-auto w-[91.1112vw] lg:w-[62.5vw] desktop:w-[66.667vw]">
      <div className="mt-4 lg:mt-12">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
