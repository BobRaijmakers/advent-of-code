const fs = require("fs");

// Puzzle input into array
const inputArray = fs.readFileSync("./2021/day2.txt").toString().split("\n");

// Part One

// Coordinates
let xPos = 0;
let yPos = 0;

// Process each command into coordinate changes 
inputArray.forEach(command => {
    if (command.includes("forward")) {
        let forwardVal = command.replace("forward ", "");
        xPos = xPos + parseInt(forwardVal);
    } else if (command.includes("down")) {
        let downVal = command.replace("down ", "");
        yPos = yPos + parseInt(downVal);
    } else if (command.includes("up")) {
        let upVal = command.replace("up ", "");
        yPos = yPos - parseInt(upVal);
    }
});

console.log(xPos*yPos);

// Part Two
let aim = 0;
let xPos1 = 0;
let yPos1 = 0;

// Process each command into aim and movement represetned by coordinates
inputArray.forEach(command => {
    if (command.includes("forward")) {
        let forwardVal = parseInt(command.replace("forward ", ""));
        xPos1 = xPos1 + forwardVal;
        yPos1 = yPos1 + (aim * forwardVal);
    } else if (command.includes("down")) {
        let downVal = command.replace("down ", "");
        aim = aim + parseInt(downVal);
    } else if (command.includes("up")) {
        let upVal = command.replace("up ", "");
        aim = aim - parseInt(upVal);
    }
});

console.log(xPos1*yPos1);