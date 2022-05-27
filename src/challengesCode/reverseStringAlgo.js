/* solution implemented using reverse() JS built-in function */
// takes 2 parameters - string (either of type string or array) and type (string that determines type of input)
// returns either array of characters or string
export function reverseString(string, type) {
  // if the input is provided as a string, we make an array of it using the split("") function,
  // reverse it, and then create a string by concatenating all elements in array
  if (type === "string") return string.split("").reverse().join("");
  // if the input is an array, we just use reverse() built-in function
  else return string.reverse();
}

/* solution that does not use reverse() built-in function */
// takes 2 parameters - string (either of type string or array) and type (string that determines type of input)
// returns either array of characters or string
export function reversedStringWithoutBuiltinFns(string, type) {
  // if the input is provided as a string, we create a new string and iterate over the
  // original string from the end and add each character to the new string
  if (type === "string") {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--)
      reversedString = reversedString + string[i];
    return reversedString;
  } else {
    // if the input is an array, we are going to use in-place algorithm (without using extra storage)
    // and two pointer technique (one pointer will start from the beginning and the other one from the end)
    for (let i = 0; i < string.length / 2; i++)
      [string[i], string[string.length - i - 1]] = [
        string[string.length - i - 1],
        string[i],
      ];
    return string;
  }
}
