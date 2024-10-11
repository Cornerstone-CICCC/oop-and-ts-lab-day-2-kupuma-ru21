"use strict";
// Create a function `transformInput` that accepts either a string or a number.
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === "string") {
        // Reverse the string
        return x.split("").reverse().join("");
    }
    else if (typeof x === "number") {
        // Return the factorial of the number
        let factorial = 1;
        for (let i = 2; i <= x; i++) {
            factorial *= i;
        }
        return factorial;
    }
    else {
        throw new Error("Unsupported type");
    }
}
// Expected output:
console.log(transformInput("TypeScript")); // "tpircSepyT"
console.log(transformInput(5)); // 120
