export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (const value of array) {
    arrayNew.pus(appendString + value);
  }

  return arrayNew;
}
