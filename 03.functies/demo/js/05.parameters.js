console.log("----------------- Optionele parameters -------------------");
function minus(a, b) {
    if (b===undefined) return -a;
    else return a - b;
}
//Test cases:
console.log(minus(10)); // -10
console.log(minus(10, 5)); //5
console.log(minus(10, 5, 44, 555)); //5
console.log(minus(10, 0)); //10


console.log("----------------- Default waarden voor parameters -------------------");

function power(basis, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= basis;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 8));
