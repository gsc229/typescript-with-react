function someFn(myArgument: number | string | boolean)  {
 // cant do: let x = myArgument.toUpperCase()
 // until you do:
  if(typeof myArgument === 'string'){
    let x = myArgument.toUpperCase() // <-- no error
  } else if(typeof myArgument === 'number') {
    myArgument.toFixed() // <-- ts will infer number and provide number methods
  } else {
    myArgument.valueOf() // <-- same as previous 
  }



}