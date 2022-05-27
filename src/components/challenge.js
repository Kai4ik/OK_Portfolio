import React from "react";
import { useLocation } from "react-router-dom";

// components required for this page
import ProblemDescription from "./challengesDetails/problemDescription";
import UniqueStringSolution from "./challengesDetails/uniqueStringSolution";
import ReverseStringSolution from "./challengesDetails/reverseStringSolution";
import RemoveElementSolution from "./challengesDetails/removeElements";

const Challenge = () => {
  const location = useLocation();

  return (
    <>
      <ProblemDescription data={location.state} />
      {location.state.problemTitle.toLowerCase() === "unique string" ? (
        <UniqueStringSolution data={location.state} />
      ) : location.state.problemTitle.toLowerCase() === "reverse string" ? (
        <ReverseStringSolution data={location.state} />
      ) : (
        <RemoveElementSolution data={location.state} />
      )}
    </>
  );
};

export default Challenge;
