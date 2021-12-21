const fs = require("fs");

// Puzzle input into array
const inputArray = fs.readFileSync("./2021/day1.txt").toString().split("\n").map(number => {
    return parseInt(number);
});

// Determine if Number is higher than previous, if so add to counter
let simpleIncreaseCounter = 0;
for (let i = 1; i < inputArray.length; i++) {
    let prevDepth = inputArray[i-1];
    let currentDepth = inputArray[i];
    let diff = currentDepth - prevDepth;
    if (diff > 0) {
        simpleIncreaseCounter++;
    }
}

// Determine if three number average is higher than three number average with off-set of 1
let complexIncreaseCounter = 0;
for(let i = 0; i < inputArray.length - 3; i++) {
    let currentComplexDepth = inputArray[i] + inputArray[i + 1] + inputArray[i + 2];
    let nextComplexDepth = inputArray[i + 1] + inputArray[i + 2] + inputArray[i + 3];
    let complexDiff = nextComplexDepth - currentComplexDepth;
    if (complexDiff > 0) {
        complexIncreaseCounter++;
    }
}

console.log(simpleIncreaseCounter);
console.log(complexIncreaseCounter);