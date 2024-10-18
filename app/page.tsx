import { CardList } from "@/src/widgets/cardList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHIFT CINEMA | Афиша",
  description: "List of films available for ticket purchase",
};

const Home = (): JSX.Element => {
  return (
    <div className="mt-4 lg:mt-12">
      <CardList />
    </div>
  );
};

export default Home;
