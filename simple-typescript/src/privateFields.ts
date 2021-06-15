// private fields:
// delcared with # 
// cannot access outside the containing class
// cannot accesss a private field that belongs to a parent class from a sub class

class RobotPrivateField {
  #name: string;

  constructor(name: string) {
    this.#name = name
  }

  getName(){
    return this.#name
  }
}


class AdvancedRobot extends RobotPrivateField {

  #name: string // cannot override

  constructor(name: string) {
    super(name)
    this.#name = `Advanced ${name}`
  }

  getAdvancedName(){
    return this.#name // this will be advance name
  }
}


const robot = new AdvancedRobot('Steve')

console.log("Parent: ", robot.getName(), "sub class: ", robot.getAdvancedName())


// difference between private keyword and # :

// when ts is compiled to js private gets lost and those properties are accessable (don't want this)
// use # 