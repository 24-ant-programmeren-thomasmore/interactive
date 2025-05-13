const joinArrays = (a1, a2) => a1.slice(0, a1.length / 2).concat(a2).concat(a1.slice(a1.length / 2));

//Test:
console.log(joinArrays([1, 2, 3, 4], [20, 30, 40]));
console.log(joinArrays([1, 2], [20]));

//special cases
console.log(joinArrays([1], [20]));
console.log(joinArrays([1], [10, 20]));
console.log(joinArrays([], [10, 20]));
console.log(joinArrays([1, 2], []));


