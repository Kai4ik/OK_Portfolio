// takes 2 parameters - string (type - string) and caseSensitivity (type - boolean)
export default function uniqueString(string, caseSensitivity) {
  // check whether user specified the string
  if (string.length > 0) {
    // check whether a string has more than 1 character
    // if not, it automatically returns true as the only character in a string is unique
    if (string.length > 1) {
      let stringCopy = string;
      // if caseSensitivity is false, convert string to lower case
      if (!caseSensitivity) stringCopy = stringCopy.toLowerCase();
      let charToCheck = null;
      let result = true;
      // loop through stringCopy and using JS built-in "indexOf" function check whether
      // there is another such instance in a string
      for (let k = 0; k < stringCopy.length; k++) {
        charToCheck = stringCopy[k];
        // if it finds repetitive characters, stop iteration and set the result to false
        if (stringCopy.indexOf(charToCheck, k + 1) !== -1) {
          result = false;
          break;
        }
      }
      return result
        ? "{ result: true }"
        : `{ result: ${result}, character: ${charToCheck} }`;
    }
    return "{result: true }";
  }
  return "String is not provided";
}
