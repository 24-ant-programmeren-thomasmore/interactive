const calculateBTW = (prijs, btwPercentage = 6) => Math.round(prijs * (1 + btwPercentage / 100));

console.log(calculateBTW(100, 21)); // resultaat is 121
console.log(calculateBTW(100, 12)); // resultaat is 112 -- afgerond
console.log(calculateBTW(100, 6)); // resultaat is 106
console.log(calculateBTW(100)); // 6% - resultaat is 106
console.log(calculateBTW(550, 21)); // resultaat is 666 -- afgerond
console.log(calculateBTW(400, 12)); // resultaat is 448 -- afgerond
