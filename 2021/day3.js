const fs = require("fs");

// Puzzle input into array
const inputArray = fs.readFileSync("./2021/day3.txt").toString().split("\r\n");

// CounterObject
let counterObject = {
    0: {
        0: 0,
        1: 0
    },
    1: {
        0: 0,
        1: 0
    },
    2: {
        0: 0,
        1: 0
    },
    3: {
        0: 0,
        1: 0
    },
    4: {
        0: 0,
        1: 0
    },
    5: {
        0: 0,
        1: 0
    },
    6: {
        0: 0,
        1: 0
    },
    7: {
        0: 0,
        1: 0
    },
    8: {
        0: 0,
        1: 0
    },
    9: {
        0: 0,
        1: 0
    },
    10: {
        0: 0,
        1: 0
    },
    11: {
        0: 0,
        1: 0
    }
};

// Loop trough all values and digits per value, report in counterObject
inputArray.forEach(value => {
    for(let i = 0; i < value.length - 1 ; i++) {
        let digit = parseInt(value[i]);
        if ((digit === 0 || digit === 1) && counterObject[i]) {
            counterObject[i][digit]++;
        }
    }
})
console.log(counterObject)

// Compose gammaRate and epsilonRate
let gammaRate = "";
let epsilonRate = "";
for (const [index, counter] of Object.entries(counterObject)) {
    if (counter[0] > counter[1]) {
        gammaRate = gammaRate + "0";
        epsilonRate = epsilonRate + "1";
    } else if (counter[0] < counter[1]) {
        gammaRate = gammaRate + "1";
        epsilonRate = epsilonRate + "0";
    }
}

// Convert gammaRate and epsionRate from binary to decimal and multiply for power consumption
console.log(gammaRate);
console.log(epsilonRate);
let gammaDec = parseInt(gammaRate, 2);
let epsilonDec = parseInt(epsilonRate, 2);
let powerConsumption = gammaDec * epsilonDec;
console.log(powerConsumption);

// Create binary object for filtering purposes
let binaryObjects = [];
inputArray.forEach(binary => {
    let localObject = {
        "value": binary
    };
    for (let i = 0; i < binary.length - 1; i++) {
        localObject[i] = binary[i];
    }
    binaryObjects.push(localObject);
});

// console.log(binaryObjects);

// TODO: Recalculate after each filter!
// Loop through bit criteria using counterObject and filter
let oxygenRate = "";
let co2Rate = "";
let oxygenValues = binaryObjects;
let co2Values = binaryObjects;
let keys = Object.keys(counterObject)
for (let i = 0; i < keys.length; i++) {
    let mostCommon = "";
    let leastCommon = "";
    if (counterObject[i][0] > counterObject[i][1]) {
        mostCommon = 0;
        leastCommon = 1;
    } else if (counterObject[i][0] < counterObject[i][1]) {
        mostCommon = 1;
        leastCommon = 0;
    }
    if (!oxygenRate) {
        console.log(oxygenValues);
        console.log(`MostCommon: ${mostCommon}, Index: ${i}`);
        oxygenValues = oxygenValues.filter(value => value[i] == mostCommon)
        if (oxygenValues.length === 1 ) {
            console.log("eentje over");
            oxygenRate = oxygenValues[0]["value"];
        }
    }
}

console.log(oxygenRate)