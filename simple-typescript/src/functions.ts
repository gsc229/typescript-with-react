// Functions (optional default prameters)
// can use defalut value ex. b: number = 0 or the '?' optional symbol like below
function sum(a: number, b?: number): number{
  return a + (b || 0)
}

console.log(sum(1, 2))
console.log(sum(2))
type MyFunc = (a:number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b
console.log(sum2(3, 4))

function sumEverything(arg1: string, arg2: boolean, numbers: number[]): number{
  return numbers.reduce((accum, currV) => accum + currV, 0)
}

console.log(sumEverything("", false, [1,2,3,4]))

// Overloads
// returns area of any rectangle with height and width
function calcArea(width: number, height: number): number
// ...but can take only one parameter if the rectangle is a square
function calcArea(length: number): number
// look at the numbe of arguments to see if the rectance is a square or not and handle with the needed logic
function calcArea(...args: number[]): number{
  if(args.length == 2) {
    return args[0] * args[2]
  } 
  return Math.pow(args[0], 2)
}




