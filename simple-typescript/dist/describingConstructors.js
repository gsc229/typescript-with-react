"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    meow() {
        return "MEOW";
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() {
        return "RUFF";
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
const felix = initializeAnimal(Cat, 'Felix');
const ava = initializeAnimal(Dog, 'Ava');
console.log(felix.meow(), felix.meow(), felix.group, felix.name);
console.log(ava.bark(), ava.bark(), ava.group, ava.name);
