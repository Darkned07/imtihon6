import React from "react";
// hooks
import { useCollection } from "../hooks/useCollection";
// components
import RecipiesList from "../components/RecipiesList";

function Home() {
  const { documents: recipies } = useCollection();
  return (
    <div>
      {recipies && <RecipiesList recipies={recipies} />}
      {!recipies && (
        <div className="flex flex-row gap-1 items-center justify-center">
          <span className="md:text-[28px] text-[23px]">Loading</span>
          <span className="loading loading-spinner md:loading-md loading-sm"></span>
        </div>
      )}
    </div>
  );
}

export default Home;
