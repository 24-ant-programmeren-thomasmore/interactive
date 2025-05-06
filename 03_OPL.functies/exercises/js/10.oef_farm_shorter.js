
//merk op: eerst expliciet omzetten naar een String en dan pas de padStart toepassen

const farmInventory = function (amountOfCows, amountOfChickens, amountOfPigs) {
    function showAnimal(amount, name) {
        const zeroPad = width => String(amount).padStart(width, "0");

        if (!amount) return;
        console.log(`${zeroPad(3)} ${name} ${amount > 10 ? "!!!" : ""}`);
    }

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


