"use strict";
class Robot {
    // protected properties conly only be accessed within the class in which it is defined or any sublcass. 
    constructor(_name) {
        this._name = _name;
    } // automatically does this.name = name
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set name(value) {
        this._name = 'PREFIX_' + value;
    }
    get name() {
        return this._name + '_SUFFIX';
    }
}
const robRobot = new Robot('Rob');
robRobot.askName();
robRobot.move(5);
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
royRobot.askName();
royRobot.move(10);
console.log(`Roy robot's jetpack size is ${royRobot.name}`);
console.log('Roy robot protected name', royRobot.name); // error bc name is protected in Robot class
