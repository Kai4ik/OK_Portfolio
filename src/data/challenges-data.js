import UniqueStringCover from "../images/UniqueStringCover.png";
import UniqueStringSolution from "../images/UniqueStringSolution.png";

import ReverseStringCover from "../images/ReverseStringCover.jpg";
import ReverseStringSolution from "../images/ReverseStringSolution.png";

import RemoveElementCover from "../images/RemoveElement.jpg";

import ChallengesImg from "../images/challenges.jpg";

const challengesData = [
  {
    problemTitle: "Unique String",
    coverImg: UniqueStringCover,
    problemStatement:
      "Algorithm used to determine if a string has all unique characters (without repetitions) <br/> Notes: By default, solution is case insensitive      ",
    solution: UniqueStringSolution,
    solutionTitle: "Enter a string to check",
    examples: [
      {
        input: "",
        output: "String is not provided",
      },
      {
        input: "k",
        output: "{ result: true}",
      },
      {
        input: "Kk",
        output: "{ result: false, character: k}",
      },
      {
        input: "Kai",
        output: "{ result: true }",
      },
      {
        input: "Heyy",
        output: "{ result: false, character: h }",
      },
    ],
  },
  {
    problemTitle: "Reverse String",
    coverImg: ReverseStringCover,
    problemStatement:
      "A function that reverses a string. The input could be of 2 types - string or array of characters (depending on what user has chosen). The function returns either reversed string or array (depending on what user has chosen) <br /> Notes: By default, input is given as an array of characters and uses reverse() JS built-in function",
    solution: ReverseStringSolution,
    solutionTitle: "Enter a string to reverse",
    examples: [
      {
        input: `risen`,
        output: `["n", "e", "s", "i", "r"]`,
      },
      {
        input: "canada",
        output: "adanac",
      },
    ],
  },
  {
    problemTitle: "Remove Element",
    coverImg: RemoveElementCover,
    problemStatement: `Given an integer array <b>numArray</b> and an integer <b> value </b>, remove all occurrences of value in numArray in-place. The relative order of the elements may be changed. 
     <br /> Return the length of a new array (that does not include elements equal to value)`,
    solution: UniqueStringSolution,
    examples: [
      {
        input: "numArray = [3,2,2,3], value = 2",
        output: "2, numArray=[3,3,_,_]",
      },
      {
        input: "[0,1,2,2,3,0,4,2], value = 2",
        output: "5, numArray = [0,1,3,0,4,_,_,_]",
      },
    ],
  },
];

export default challengesData;
