//=================================================================
//scope van deze s is global
const s = "s the GLOBAL VAR";
console.log(s);

const someFunction = function (s) {
    //scope van s is hier local in function someFunction (s is parameter)
    console.log(`---- in function someFunction, s is: "${s}"`);
    if (!s) {
        const s = "s LOCAL IN IF-BLOCK";
        console.log(`---- in function someFunction, in if, s is: "${s}"\n`);
    }
    return s + " AAA";
}
console.log('-- someFunction("STRING")');
console.log(someFunction("STRING"));

console.log();
console.log('-- someFunction(s)');
console.log(someFunction(s));
console.log('-- is s veranderd?');
console.log(s); //is s veranderd?

console.log();
console.log('-- someFunction("")');
console.log(someFunction(""));


const anotherFunction = function (str) {
    console.log(`---- in function anotherFunction, str is: "${str}"`);
    const nestedFunction = function (extension) {
        // nested function kan scope van parent function gebruiken (dat noemen we closure)
        console.log(`---- in nestedFunction, str is: "${str}"`);
        return str + extension;
    }
    return nestedFunction(" BBB");
}
console.log("")
console.log('-- anotherFunction("CCC")');
console.log(anotherFunction("CCC"));

console.log("")
console.log("")
