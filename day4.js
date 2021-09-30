const { lineBreak } = require("acorn");
const { once } = require("events");
const fs = require("fs");
const readline = require("readline");

// Transform txt to objects in array
let passportFilepath = "./day4.txt";

// Counters
global.validPassportCounter = 0;
global.invalidPassportCounter = 0;

async function getPassportObjects(passportFilepath) {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(passportFilepath)
    });

    let localPassportObject = {};

    readInterface.on('line', line => {
        let pairRegex = /[^: ]+:[^ ]+/g;
        let keyRegex = /[^:]+/;
        let valueRegex = /[^:]+$/;

        if (line) {
            // Next passport Line
            let pairs = line.match(pairRegex) ? line.match(pairRegex) : [];
            for (const pair of pairs) {
                let key = pair.match(keyRegex) ? pair.match(keyRegex)[0] : "";
                let value = pair.match(valueRegex) ? pair.match(valueRegex)[0] : "";
                if (key && value) {
                    localPassportObject[key] = value;
                }
            }
        } else {
            // End of Passport object
            // Check local passport
            checkPassport(localPassportObject);
            // Reset local passport       
            localPassportObject = {};
        }
    })

    readInterface.on("close", () => {
        // End of file
        // Check final local passport
        checkPassport(localPassportObject); 
        console.log("File done");
    })

    await once(readInterface, "close");
    return;
}

function checkPassport(passportObject) {
    let presentKeys = Object.keys(passportObject);
    if (
        presentKeys.includes("byr") && 
        presentKeys.includes("iyr") && 
        presentKeys.includes("eyr") &&
        presentKeys.includes("hgt") &&
        presentKeys.includes("hcl") &&
        presentKeys.includes("ecl") &&
        presentKeys.includes("pid")
    ) {
        // Passport is valid, all necessary data present
        // console.log(passportObject);
        // console.log("Passport valid");
        global.validPassportCounter++;
    } else {
        // Passport is invalid, missing data
        // console.log(passportObject);
        // console.log("Passport invalid");
        global.invalidPassportCounter++;
    }
}

(async() => {
    await getPassportObjects(passportFilepath);
    console.log("Valid passports: " + global.validPassportCounter);
})();
