const { once } = require("events");
const fs = require("fs");
const readline = require("readline");
const { createImportSpecifier } = require("typescript");

let rulesFile = "./2020/day7.txt";

/**
 * Function to retrieve object with all luggage regulation rules
 * @param rulesFile path to rules file
 * @returns Object containing all rules
 */
async function getRules(rulesFile) {
    let rulesObject = {};

    const readInterface = readline.createInterface({
        input: fs.createReadStream(rulesFile)
    });

    readInterface.on('line', line => {
        if (line) {
            // Remove . from rule
            line = line.replace(".","");

            // Only singular bag
            line = line.replaceAll("bags", "bag");

            let keyValue = line.split(" contain ");
            if (keyValue && keyValue.length == 2) {
                let localRulesObject = {};
                let ruleValues = keyValue[1].split(", ");
                for (const ruleValue of ruleValues) {
                    let i = ruleValue.indexOf(" ");
                    let splits = [ruleValue.slice(0,i), ruleValue.slice(i+1)];
                    if (splits.length == 2) {
                        localRulesObject[splits[1]] = splits[0];
                    }
                }
                rulesObject[keyValue[0]] = localRulesObject;
            }
        }
    });

    readInterface.on("close", () => {
        // End of file
        console.log("File done");
    })

    await once(readInterface, "close");
    return rulesObject;
}

/**
 * 
 * @param rules object containing all the rules 
 * @param outerBag the outerBag that we are checking
 * @returns boolean if bag will fit
 */
function canItFitShinyGold(rules, outerBag) {
    // First check if outerBag is in rules
    if (rules.hasOwnProperty(outerBag)){
        // Can outerBag directly contain a shiny gold bag
        let innerBags = Object.keys(rules[outerBag]);
        for (const innerBag of innerBags) {
            if (innerBag.includes("shiny gold")) {
                return true;
            } else {
                if (canItFitShinyGold(rules, innerBag)){
                    return true;
                }
            }
        }
    } else {
        // outerBag not found in rules
        return false;
    };
}

/**
 * Function to retrieve the number of bags that could fit a shiny gold bag
 * @param rules Object containing all rules 
 * @returns integer of amount of bags containing shiny gold bag
 */
function getNumberOfShinyGold(rules) {
    let counter = 0;
    let outerBags = Object.keys(rules);
    for (const outerBag of outerBags) {
        if (canItFitShinyGold(rules, outerBag)) {
            console.log(`${outerBag} can contain a shiny gold bag`);
            counter++
        }
    }
    return counter;
}

(async () => {
    let rules = await getRules(rulesFile);
    let numberOfShinyGoldOptions = getNumberOfShinyGold(rules);
    console.log(numberOfShinyGoldOptions);
})();