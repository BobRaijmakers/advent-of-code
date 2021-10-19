const { once } = require("events");
const fs = require("fs");
const readline = require("readline");

let answerFile = "./day6.txt";

/**
 * Function for retrieving an array with objects for answers and amount of answers per group 
 * @param answerFile file path to input
 * @returns array with array of answers for each group
 */
async function getGroupAnswers(answerFile) {
    let allGroupAnswers = [];
    let localGroupAnswers = [];
    
    const readInterface = readline.createInterface({
        input: fs.createReadStream(answerFile)
    });

    readInterface.on('line', line => {
        if (line) {
            // Next person in group
            let answerPerson = Array.from(line);
            for (const answer of answerPerson) {
                localGroupAnswers.push(answer);
            }
        } else {
            // End of group
            consolidateLocalGroupAnswers(allGroupAnswers, localGroupAnswers);
            localGroupAnswers = [];
        }
    })

    readInterface.on("close", () => {
        consolidateLocalGroupAnswers(allGroupAnswers, localGroupAnswers);
        localGroupAnswers = [];
        // End of file
        console.log("File done");
    })

    await once(readInterface, "close");
    return allGroupAnswers;
}

/**
 * Remove duplicates from the local groupanswers and adding them to the all group answers array
 * @param allGroupAnswers array with objects from all groups
 * @param localGroupAnswers array with answers for a group
 */
function consolidateLocalGroupAnswers(allGroupAnswers, localGroupAnswers) {
    let uniqueAnswers = [...new Set(localGroupAnswers)];
    allGroupAnswers.push({
        answers: uniqueAnswers,
        amount: uniqueAnswers.length
    })
}

function getTotalAmount(groupAnswers) {
   let totalAmount = 0;
   for (const groupAnswer of groupAnswers) {
       let amount = groupAnswer.amount;
       totalAmount = totalAmount + amount
   }
   return totalAmount;
}

(async() => {
    let groupAnswers = await getGroupAnswers(answerFile);
    let totalAmount = getTotalAmount(groupAnswers);
    console.log(totalAmount);
})();