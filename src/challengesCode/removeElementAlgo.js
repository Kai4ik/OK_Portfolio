// takes 2 parameters - numArray (type - array of numbers) and value (type - number)
export default function removeElement(numArray, value) {
  let newLength = 0;
  for (let k = 0; k < numArray.length; k++) {
    if (numArray[k] !== value) {
      numArray[newLength] = numArray[k];
      newLength++;
    }
  }

  return { length: newLength, array: numArray };
}
