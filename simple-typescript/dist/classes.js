"use strict";
class Robot {
    // protected properties conly only be accessed within the class in which it is defined or any sublcass. 
    constructor(_name) {
        this._name = _name;
    } // automatically does this.name = name
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set color(color) {
        if (!Robot.isColorAvailable) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = 'PREFIX_' + value;
    }
    get name() {
        return this._name + '_SUFFIX';
    }
}
// you cannot access static properties on the class instance i.e. you cannot use this.availableColors rather you must use..
// Robot.availableColors - You can only access static proerties on the class itslef (not the instance)
Robot.availableColors = ['green', 'yellow'];
const timRobot = new Robot('Tim');
timRobot.askName();
timRobot.move(5);
// modifiers: readonly, private, protected, static
class FlyingRobot extends Robot {
    // once the readonly property is set in the constructor it won't be allowed to change by any other method 
    constructor(name, jetpackSize) {
        super(name);
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const royRobot = new FlyingRobot('Roy', 10);
royRobot.askName(); //
royRobot.move(10);
console.log(`Roy robot's jetpack size is ${royRobot.jetpackSize}`);
console.log('Roy robot protected name', royRobot.name); // error bc name is protected in Robot class
// can access static methods/properties on the class, but you can make static properties private
// Classes have two "sides": static (static properties/methods/construcor)  and instance properties/methods
console.log(Robot.availableColors, Robot.isColorAvailable("yellow"));
