const { once } = require("events");
const fs = require("fs");
const readline = require("readline");

let boardingPassesFile = "./2020/day5.txt";
const planeRows = 127;
const planeColumns = 7;

/**
 * Function for retrieving seatIDs from file containing boardingPass IDs
 * @param boardingPassesFile inpupt file path
 * @returns array of all seatIDs
 */
async function getSeatIDs(boardingPassesFile) {
    let seatIDs = [];

    const readInterface = readline.createInterface({
        input: fs.createReadStream(boardingPassesFile)
    });

    readInterface.on('line', line => {
        if (line) {
            let seatID = getSeatID(line);
            seatIDs.push(seatID);
        }
    })

    readInterface.on("close", () => {
        // End of file
        console.log("File done");
    })

    await once(readInterface, "close");
    return seatIDs;
}

/**
 * Function to retrieve seatID on basis of boardingPassID
 * @param boardingPassID 
 * @returns seatID
 */
function getSeatID(boardingPassID) {
    let seatRow = getSeatRow(boardingPassID.substring(0, 7));
    let seatColumn = getSeatColumn(boardingPassID.substring(7, 10));
    let seatID = seatRow * 8 + seatColumn;
    return seatID;    
}

function getSeatRow(boardingPassRow) {
    let minRowSeat = 0;
    let maxRowSeat = planeRows;
    
    let partitions = Array.from(boardingPassRow);
    for (const partition of partitions) {
        if (partition === "F") {
            maxRowSeat = (maxRowSeat / 2) + (minRowSeat / 2) - .5
        } else if (partition === "B") {
            minRowSeat = (minRowSeat / 2) + (maxRowSeat / 2) + .5
        }
    }
    
    if (minRowSeat === maxRowSeat) {
        return minRowSeat;
    } else { 
        console.error("minRow and maxRow not equal");
    }
}

function getSeatColumn(boardingPassColumn) {
    let minColumnSeat = 0;
    let maxColumnSeat = planeColumns;

    let partitions = Array.from(boardingPassColumn);
    for (const partition of partitions) {
        if (partition === "L") {
            maxColumnSeat = (maxColumnSeat / 2) + (minColumnSeat / 2) - .5
        } else if (partition === "R") {
            minColumnSeat = (minColumnSeat / 2) + (maxColumnSeat / 2) + .5
        }
    }
    
    if (minColumnSeat === maxColumnSeat) {
        return minColumnSeat;
    } else { 
        console.error("minColumn and maxColumn not equal");
    }
}

(async() => {
    // Retrieve all seatIDs
    let seatIDs = await getSeatIDs(boardingPassesFile);
    
    // Check for non existing seatID for which conneting seatIDs exist
    for (let i = 0; i < 930; i++) {
        if (!seatIDs.includes(i)) {
            if (seatIDs.includes(i+1) && seatIDs.includes(i-1)) {
                console.log(i);
            }
        }
    }
    
    // let highestSeatID = Math.max.apply(null, seatIDs);
    // console.log(highestSeatID);
})();
