import React from 'react'
import { renderToString } from 'react-dom/server'

interface Cart {
  calculateTotal(): number
}

interface Cart {
  x: number
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

// the Cart interface has all three features of the above interfaces

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: {discountCode: number}){
    if(options && options.discountCode){
      return 0
    }
    return 1
  }
}

console.log(myCart.calculateTotal({discountCode: 5})) // 0
console.log(myCart.calculateTotal()) // 1

// important note on namespaces can only reuse exported properties

namespace MyNameSpace {
  export const x: number = 10
  export interface SomeInterface {
    y: number
  }
}


namespace MyNameSpace {
  export const getX = () => x
  export interface SomeInterface {
    x: number
  }
}

console.log(MyNameSpace.x) // 10
console.log(MyNameSpace.getX()) // 10

const someInterface: MyNameSpace.SomeInterface = {
  x: 15,
  y: 12
}


function someFunction(){
  return 10
}

namespace someFunction {
  export const someProperty = 10
}

console.log('someFunction.someProperty: ',someFunction.someProperty) // 10
console.log('someFunction() -->', someFunction())

enum Vegetables {
  Tomato = 'tomato',
  Onion = 'onion'
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomato + " " + Vegetables.Onion
  }
}

const salad = Vegetables.makeSalad()

console.log(salad) // tomato onion

// namespace with classes
class Salad {

}

namespace Salad {
  export const availableDressings = ['olive oil', 'yoghurt']
}

console.log(Salad.availableDressings.includes('olive oil')) // true


/* REACT  */
declare module 'react' {
  interface Component {
    helloWorld(): string
  }
}

React.Component.prototype.helloWorld = function() {
  return "Hello World"
}

console.log(React.Component.prototype.helloWorld()) // Hello World 

// jsx

class MyComponent extends React.Component {
  render() {
    return <div>{this.helloWorld()}</div>
  }
}

console.log(renderToString(<MyComponent />)) // <div data-reactroot="">Hello World</div>

