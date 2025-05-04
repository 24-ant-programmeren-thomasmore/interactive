//arrow functie met 3 parameters,  en als enige statement een return
export const calculate = (a, b, c) => {
    const result = (a + b) * c;
    console.log(`- a=${a}, b=${b}, c=${c}, result=${result}`);
    return result;
};

//Test
console.log("----function calculate ")
console.log(calculate(1, 2, 3)); // 9
console.log(calculate(undefined, undefined, undefined)); // NaN
console.log(calculate("", "", "")); // 0
console.log(calculate(0, 0, 0)); // 0


//arrow functie met 3 parameters en als enige statement een return
export const calculateWithoutLog = (a, b, c) => (a + b) * c;

//Test
console.log("----function calculate Without Log (short version)")
console.log(calculateWithoutLog(1, 2, 3)); // 9
console.log(calculateWithoutLog(undefined, undefined, undefined)); // NaN
console.log(calculateWithoutLog("", "", "")); // 0
console.log(calculateWithoutLog(0, 0, 0)); // 0


//arrow functie met 1 parameter en als enige statement een return
//syntax type 2
//functie wordt assigned aan een const
export const power = x => x * x

//Test
console.log("----function power")
console.log(power(14)); // 196
console.log(power(0)); // 0
console.log(power()); // NaN


//arrow functie zonder parameter die niets returnt
const makeNoise = () => {
    console.log("peep");
}
//Test
console.log("----function makeNoise")
makeNoise();
//geen return --> is eigenlijk een return van undefined:
console.log(makeNoise());


//arrow functie zonder parameter die niets returnt (kan ook zonder de { } )
const makeAnotherNoise = () => console.log("peep");

//Test
console.log("----function makeNoise")
makeAnotherNoise();
//geen return --> is eigenlijk een return van undefined. En console.log returnt ook undefined
console.log(makeAnotherNoise());
