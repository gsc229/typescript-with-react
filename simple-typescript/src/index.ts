// import with namespace:
import * as multiplyModule from './multiply'
//import multiply, { multiplyByTwo as mBy2} from './multiply'
// Imprt Interface:
import { HellowWorld } from './multiply'

const a = 4
const b = 3 
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`) // w/o namespance --> console.log(`${a} * ${b} = ${multiply(a, b)}`)
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`) // w/o namespace --> console.log(`${a} * 2 = ${multiplyByTwo(a)}`)