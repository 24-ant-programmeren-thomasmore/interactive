//===============================================
//Stap 1
//===============================================
//exponent is 2 of 3 (afspraak - moet niet gecheckt worden)
//  merk op - we testen hier niet of de parameter juist is,
//  dus als bvb parameter exponent 4 is krijg je een niet-intuitief resultaat)
//arrow-function-syntax
//deze functie is nog niet in 1 statement geschreven
const powerTwoOrThree_v1 = (number, exponent) => {
    if (exponent === 2) {
        return number * number;
    } else {
        return number * number * number;
    }
};
//Test
console.log("--- powerTwoOrThree_v1");
console.log(powerTwoOrThree_v1(4, 2)); // 4*4 = 16
console.log(powerTwoOrThree_v1(4, 3)); // 4*4*4 = 64
console.log(powerTwoOrThree_v1(5, 3)); // 5*5*5 = 125


//exponent is 2 of 3
//arrow-function-syntax, kortere notatie
const powerTwoOrThree_v2 = (number, exponent) => {
    return exponent === 2 ? number * number : number * number * number;
};
//Test
console.log("--- powerTwoOrThree_v2");
console.log(powerTwoOrThree_v2(4, 2)); // 4*4 = 16
console.log(powerTwoOrThree_v2(4, 3)); // 4*4*4 = 64
console.log(powerTwoOrThree_v2(5, 3)); // 5*5*5 = 125


//exponent is 2 of 3
//arrow-function-syntax, nog kortere notatie (1 statement !== 1 lijn)
const powerTwoOrThree_v3 = (number, exponent) =>
    exponent === 2 ? number * number : number * number * number;
//Test
console.log("--- powerTwoOrThree_v3");
console.log(powerTwoOrThree_v3(4, 2)); // 4*4 = 16
console.log(powerTwoOrThree_v3(4, 3)); // 4*4*4 = 64
console.log(powerTwoOrThree_v3(5, 3)); // 5*5*5 = 125


//===============================================
//Stap 2
//===============================================

const powerTwoOrThreeChecked_v1 = (number, exponent) => {
    if (exponent === 2) {
        return number * number;
    } else if (exponent === 3) {
        return number * number * number;
    } else {
        console.log("parameter exponent moet 2 of 3 zijn.")
        return 0;
    }
};
//Test
console.log("--- powerTwoOrThreeChecked_v1");
console.log(powerTwoOrThreeChecked_v1(4, 2)); // 4*4 = 16
console.log(powerTwoOrThreeChecked_v1(4, 3)); // 4*4*4 = 64
console.log(powerTwoOrThreeChecked_v1(4, 25)); // 0


const powerTwoOrThreeChecked_v2 = (number, exponent) => {
    if (exponent === 2) return number * number;
    if (exponent === 3) return number * number * number;
    console.log("parameter exponent moet 2 of 3 zijn.")
    return 0;
};
//Test
console.log("--- powerTwoOrThreeChecked_v2");
console.log(powerTwoOrThreeChecked_v2(4, 2)); // 4*4 = 16
console.log(powerTwoOrThreeChecked_v2(4, 3)); // 4*4*4 = 64
console.log(powerTwoOrThreeChecked_v2(4, 25)); // 0


//===============================================
//Stap 3
//===============================================
//merk op: binnen de scope van een code-block kan ik steeds de naam powerX gebruiken
{
    //exponent mag eender welke waarde zijn
    const powerX = (number, exponent) => {
        let result = 1;
        for (let i = 0; i < exponent; i++)
            result = number * result;
        return result;
    }
//Test
    console.log("--- powerX v1");
    console.log(powerX(4, 2)); // 4*4 = 16
    console.log(powerX(4, 0)); // 1
    console.log(powerX(4, 1)); // 4 = 4
    console.log(powerX(4, 3)); // 4*4*4 = 64
    console.log(powerX(4, 4)); // 4**4 = 4*4*4*4 = 256
}
{
//exponent is eender wat
//kortere versie met recursie
    const powerX = (number, exponent) => (exponent === 0) ? 1 : number * powerX(number, exponent - 1)
//Test
    console.log("--- powerX v2");
    console.log(powerX(4, 2)); // 4*4 = 16
    console.log(powerX(4, 0)); // 1
    console.log(powerX(4, 1)); // 4 = 4
    console.log(powerX(4, 3)); // 4*4*4 = 64
    console.log(powerX(4, 4)); // 4**4 = 4*4*4*4 = 256
}
{
//exponent is eender wat
//kortere versie - ken je taal!!!!!!!!!
    const powerX = (number, exponent) => {
        return number ** exponent;
    }
    //Test
    console.log("--- powerX v3");
    console.log(powerX(4, 2)); // 4*4 = 16
    console.log(powerX(4, 0)); // 1
    console.log(powerX(4, 1)); // 4 = 4
    console.log(powerX(4, 3)); // 4*4*4 = 64
    console.log(powerX(4, 4)); // 4**4 = 4*4*4*4 = 256
}
{
//exponent is eender wat
//kortere versie - met korte notatie
    const powerX = (number, exponent) => number ** exponent;
//Test
    console.log("--- powerX v4");
    console.log(powerX(4, 2)); // 4*4 = 16
    console.log(powerX(4, 0)); // 1
    console.log(powerX(4, 1)); // 4 = 4
    console.log(powerX(4, 3)); // 4*4*4 = 64
    console.log(powerX(4, 4)); // 4**4 = 4*4*4*4 = 256
}