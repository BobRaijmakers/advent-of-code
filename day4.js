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
        // console.log("File done");
    })

    await once(readInterface, "close");
    return;
}

function checkPassport(passportObject) {
    let presentKeys = Object.keys(passportObject);

    // console.log(passportObject);
    // console.log("byr: " + byrValidate(passportObject, presentKeys));
    // console.log("iyr: " + iyrValidate(passportObject, presentKeys));
    // console.log("eyr: " + eyrValidate(passportObject, presentKeys));
    // console.log("hgt: " + hgtValidate(passportObject, presentKeys));
    // console.log("hcl: " + hclValidate(passportObject, presentKeys));
    // console.log("ecl: " + eclValidate(passportObject, presentKeys));
    // console.log("pid: " + pidValidate(passportObject, presentKeys));
    // console.log("cid: " + cidValidate(passportObject, presentKeys));

    if (
        byrValidate(passportObject, presentKeys) &&
        iyrValidate(passportObject, presentKeys) &&
        eyrValidate(passportObject, presentKeys) &&
        hgtValidate(passportObject, presentKeys) &&
        hclValidate(passportObject, presentKeys) &&
        eclValidate(passportObject, presentKeys) &&
        pidValidate(passportObject, presentKeys) &&
        cidValidate(passportObject, presentKeys)
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
    console.log("Invalid passports: " + global.invalidPassportCounter);
})();

function byrValidate(passportObject, presentKeys) {
    if (presentKeys.includes("byr")) {
        let param = passportObject["byr"];
        return Number(param) >= 1920 && Number(param) <= 2002;
    } else {
        // Missing data
        return false;
    }
}

function iyrValidate(passportObject, presentKeys) {
    if (presentKeys.includes("iyr")) {
        let param = passportObject["iyr"];
        return Number(param) >= 2010 && Number(param) <= 2020;
    } else {
        // Missing data
        return false;
    }
}

function eyrValidate(passportObject, presentKeys) {
    if (presentKeys.includes("eyr")) {
        let param = passportObject["eyr"];
        return Number(param) >= 2020 && Number(param) <= 2030;
    } else {
        // Missing data
        return false;
    }
}

function hgtValidate(passportObject, presentKeys) {
    if (presentKeys.includes("hgt")) {
        let param = passportObject["hgt"];
        if (param.includes("in")) {
            // Inches height
            let height = param.replace("in", "");
            if (!isNaN(height)) {
                return Number(height) >= 59 && Number(height) <= 76;
            } else return false;
        } else if (param.includes("cm")) {
            // cm height
            let height = param.replace("cm", "");
            if (!isNaN(height)) {
                return Number(height) >= 150 && Number(height) <= 193;
            } else return false;
        } else {
            return false;
        }
    } else {
        // Missing data
        return false;
    }
}

function hclValidate(passportObject, presentKeys) {
    if (presentKeys.includes("hcl")) {
        let param = passportObject["hcl"];
        let hexadecimalRegex = new RegExp("#[A-Fa-f0-9]+$", "g");
        return hexadecimalRegex.test(param);
    } else {
        // Missing data
        return false;
    }
}

function eclValidate(passportObject, presentKeys) {
    if (presentKeys.includes("ecl")) {
        let param = passportObject["ecl"];
        let haircolors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
        return haircolors.includes(param);    
    } else {
        // Missing data
        return false;
    }
}

function pidValidate(passportObject, presentKeys) {
    if (presentKeys.includes("pid")) {
        let param = passportObject["pid"];
        let pidRegex = new RegExp("^[0-9]{9}$", "gm");
        return pidRegex.test(param);
    } else {
        // Missing data
        return false;
    }
}

function cidValidate(passportObject, presentKeys) {
    // Always ignored
    return true;
}
