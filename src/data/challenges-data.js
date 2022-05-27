const challengesData = [
  {
    problemTitle: "Unique String",
    coverImg:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FUniqueStringCover.png?alt=media&token=8331fc51-bfd9-41cc-93c3-80f56ceae110",
    problemStatement:
      "Algorithm used to determine if a string has all unique characters (without repetitions) <br/> Notes: By default, solution is case insensitive      ",
    solution:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FUniqueStringSolution.png?alt=media&token=ccd34c6e-bc63-4b1b-b2c8-05747d9a6b8f",
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
    coverImg:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FReverseStringCover.jpg?alt=media&token=f82fc418-72d3-40ca-b1d0-0840d65c69db",
    problemStatement:
      "A function that reverses a string. The input could be of 2 types - string or array of characters (depending on what user has chosen). The function returns either reversed string or array (depending on what user has chosen) <br /> Notes: By default, input is given as an array of characters and uses reverse() JS built-in function",
    solution:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FReverseStringSolution.png?alt=media&token=46a05999-5833-4900-99e8-eeb2034ad32c",
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
    coverImg:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FRemoveElementCover.jpg?alt=media&token=e6c7d5b0-e55d-4619-a667-54f87523d5c8",
    problemStatement: `Given an integer array <b>numArray</b> and an integer <b> value </b>, remove all occurrences of value in numArray in-place. The relative order of the elements may be changed. 
     <br /> Return the length of a new array (that does not include elements equal to value) and array itself`,
    solution:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/challenges%2FRemoveElementSolution.png?alt=media&token=e0858951-5540-4970-9be1-166cf6acd125",
    solutionTitle: "Enter a comma-separated array of numbers",
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
