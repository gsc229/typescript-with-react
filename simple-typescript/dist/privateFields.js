"use strict";
// private fields:
// delcared with # 
// cannot access outside the containing class
// cannot accesss a private field that belongs to a parent class from a sub class
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name, _name_1;
class RobotPrivateField {
    constructor(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    getName() {
        return __classPrivateFieldGet(this, _name);
    }
}
_name = new WeakMap();
class AdvancedRobot extends RobotPrivateField {
    constructor(name) {
        super(name);
        _name_1.set(this, void 0); // cannot override
        __classPrivateFieldSet(this, _name_1, `Advanced ${name}`);
    }
    getAdvancedName() {
        return __classPrivateFieldGet(this, _name_1); // this will be advance name
    }
}
_name_1 = new WeakMap();
const robot = new AdvancedRobot('Steve');
console.log("Parent: ", robot.getName(), "sub class: ", robot.getAdvancedName());
// difference between private keyword and # :
// when ts is compiled to js private gets lost and those properties are accessable (don't want this)
// use # 
