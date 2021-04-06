"use strict";
// Functions (optional default prameters)
// can use defalut value ex. b: number = 0 or the '?' optional symbol like below
function sum(a, b) {
    return a + (b || 0);
}
console.log(sum(1, 2));
console.log(sum(2));
const sum2 = (a, b) => a + b;
console.log(sum2(3, 4));
function sumEverything(arg1, arg2, numbers) {
    return numbers.reduce((accum, currV) => accum + currV, 0);
}
console.log(sumEverything("", false, [1, 2, 3, 4]));
// look at the numbe of arguments to see if the rectance is a square or not and handle with the needed logic
function calcArea(...args) {
    if (args.length == 2) {
        return args[0] * args[2];
    }
    return Math.pow(args[0], 2);
}
