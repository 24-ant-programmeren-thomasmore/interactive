const zeroPad = function (number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

const farmInventory = function (amountOfCows, amountOfChickens, amountOfPigs) {
    console.log("----------")
    console.log(`${zeroPad(amountOfCows, 3)} koeien`);
    console.log(`${zeroPad(amountOfChickens, 3)} kippen`);
    console.log(`${zeroPad(amountOfPigs, 3)} varkens`);
}

//Test
farmInventory(7, 16, 3);
farmInventory(0, 16, 3); //alleen kippen en varkens
farmInventory(0, 16, 0); //alleen kippen
farmInventory(null, 16, ""); //alleen kippen
farmInventory(undefined, 16, ""); //alleen kippen


