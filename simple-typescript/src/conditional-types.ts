type SomeType = string
type MyConditionalType = SomeType extends string ? string : null

function someFunction<T>(value: T ){
  type A = T extends boolean ? 'Type A' : T extends string ? 'Type B' : T extends number ? 'Type C' : 'Type D'
  const someOtherFunction = (someArg: T extends boolean ? 'Type A' : 'Type B') => {
    const a: 'Type A' | 'Type B' = someArg
  }

  return someOtherFunction
}

const result = someFunction("") // Type A
const result2 = someFunction(true) // Type B


type StringOrNot<T> = T extends string ? string : never

type AUnion = string | boolean | never


// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'> 

/* 
Explanation of ResultType (above)

for each of the first union (T), typescript (distributatively) compares it the  second (U) 
 T          (   U   )
'a' extends 'a' | 'b' ? never : 'a'  --> never
'b' extends 'a' | 'b' ? never : 'b'  --> never
'c' extends 'a' | 'b' ? never : 'c'  --> 'c'

*/

// This becomes non-distributive
type MyType<T> = (() => T) extends () => (string | number) ? T : never
// Above 'MyType' line can also be written: (they are both non-distributive)
// type MyType<T> = [T] extends [string | number] ? T : never
type MyResult = MyType<string | number | boolean> // never
type MyResult2 = MyType<string | number> // string | number

/* ======================================================================================================================================== */

type InferSomething<T> = T extends infer U ? U : any

type Inferred = InferSomething<'I am a string'>

type InferSomePart<T> = T extends { a: infer A, b: infer B } ? A & B : any

type InferredPart = InferSomePart<{ 
  a: {someAProp: 1},
  b: { someBProp: "HI"} 
}>

// How ReturnType utility type works by inferring:
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyFunctReturnValue = ReturnType<() => true>