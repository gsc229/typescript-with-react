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
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
console.log({ obj });
