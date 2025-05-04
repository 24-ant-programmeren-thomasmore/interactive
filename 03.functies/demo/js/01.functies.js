//functie met 3 parameters en return statement
//syntax type 1
export function calculate(a, b, c) {
    return (a + b) * c;
}

//Test
console.log("----function calculate")
console.log(calculate(1, 2, 3)); // 9
console.log(calculate(undefined, undefined, undefined)); // NaN
console.log(calculate("", "", "")); // 0
console.log(calculate(0, 0, 0)); // 0


//functie met 1 parameter en return statement
//syntax type 2
//functie wordt assigned aan een const
export const power = function (x) {
    return x * x;
}
//Test
console.log("----function power")
console.log(power(14)); // 196
console.log(power(0)); // 0
console.log(power()); // NaN


//functie moet niets returnen
const makeNoise = function () {
    console.log("peep");
}
//Test
console.log("----function makeNoise")
makeNoise();

//in dat geval returnt de functie undefined:
console.log(makeNoise());
