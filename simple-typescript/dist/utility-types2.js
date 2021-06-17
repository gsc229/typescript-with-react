"use strict";
const myObject = {
    sayHello() {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() { return "Hello World"; }
});
console.log(myObject.sayHello());
