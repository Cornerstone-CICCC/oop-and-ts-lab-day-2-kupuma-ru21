// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues<T extends number | string>(values: T[]): number | string {
  if (typeof values[0] === "number") {
    return values.reduce((sum, val) => sum + (val as number), 0 as number);
  } else {
    return values.reduce(
      (concat, val) => concat + (val as string),
      "" as string
    );
  }
}

// Expected output:
console.log(addValues([1, 2, 3])); // 6
console.log(addValues(["Hello", " ", "World"])); // "Hello World"
