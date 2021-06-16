"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
// the Cart interface has all three features of the above interfaces
let myCart = {
    x: 1,
    calculateTotal(options) {
        if (options && options.discountCode) {
            return 0;
        }
        return 1;
    }
};
console.log(myCart.calculateTotal({ discountCode: 5 })); // 0
console.log(myCart.calculateTotal()); // 1
// important note on namespaces can only reuse exported properties
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.x = 10;
})(MyNameSpace || (MyNameSpace = {}));
(function (MyNameSpace) {
    MyNameSpace.getX = () => MyNameSpace.x;
})(MyNameSpace || (MyNameSpace = {}));
console.log(MyNameSpace.x); // 10
console.log(MyNameSpace.getX()); // 10
const someInterface = {
    x: 15,
    y: 12
};
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
console.log('someFunction.someProperty: ', someFunction.someProperty); // 10
console.log('someFunction() -->', someFunction());
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + " " + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
console.log(salad); // tomato onion
// namespace with classes
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
console.log(Salad.availableDressings.includes('olive oil')); // true
react_1.default.Component.prototype.helloWorld = function () {
    return "Hello World";
};
console.log(react_1.default.Component.prototype.helloWorld()); // Hello World 
// jsx
class MyComponent extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", null, this.helloWorld());
    }
}
console.log(server_1.renderToString(react_1.default.createElement(MyComponent, null))); // 
