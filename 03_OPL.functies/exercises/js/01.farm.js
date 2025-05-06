const zeroPad = function (number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function showAnimal(amount, name) {
    if (!amount) return;
    console.log(`${zeroPad(amount, 3)} ${name} ${amount > 10 ? "!!!" : ""}`);
}

const farmInventory = function (amountOfCows, amountOfChickens, amountOfPigs) {
    console.log("----------")
    showAnimal(amountOfCows, "koeien");
    showAnimal(amountOfChickens, "kippen");
    showAnimal(amountOfPigs, "varkens");
}

//Test
farmInventory(7, 16, 3);
farmInventory(0, 16, 3); //alleen kippen en varkens
farmInventory(0, 16, 0); //alleen kippen
farmInventory(null, 16, ""); //alleen kippen
farmInventory(undefined, 16, ""); //alleen kippen


