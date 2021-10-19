const { once } = require("events");
const fs = require("fs");
const readline = require("readline");

let rulesFile = "./day7.txt";

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

(async () => {
    let rules = await getRules(rulesFile);
    console.log(rules);
})();