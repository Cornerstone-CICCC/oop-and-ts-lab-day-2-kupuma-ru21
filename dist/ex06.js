"use strict";
// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.
function addValues(values) {
    if (typeof values[0] === "number") {
        return values.reduce((sum, val) => sum + val, 0);
    }
    else {
        return values.reduce((concat, val) => concat + val, "");
    }
}
// Expected output:
console.log(addValues([1, 2, 3])); // 6
console.log(addValues(["Hello", " ", "World"])); // "Hello World"
