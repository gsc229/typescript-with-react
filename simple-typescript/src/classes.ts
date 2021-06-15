class Robot {

  _color: string;

  static availableColors = ['green', 'yellow']
  static isColorAvailable(color: string){
    return Robot.availableColors.includes(color)
  }

  // protected properties conly only be accessed within the class in which it is defined or any sublcass. 
  constructor(protected _name: string){} // automatically does this.name = name

  askName(){
    console.log(`My name is ${this.name}`)
  }

  move(distance: number){
    console.log(`${this.name} moved ${distance} meters`)
  }

  set color(color: string){
    if(!Robot.isColorAvailable){
      throw new Error(`Color ${color} is not available`)
    }
    this._color = color
  }

  set name(value: string){
    this._name = 'PREFIX_' + value
  }

  get name(){
    return this._name + '_SUFFIX'
  }

}

const robRobot = new Robot('Rob')

robRobot.askName()
robRobot.move(5)



class FlyingRobot extends Robot{
  
  private readonly jetpackSize: number; // Note on modifiers. When a modifier is not specified the property is public by default.
  // once the readonly property is set in the constructor it won't be allowed to change by any other method 
  constructor(name: string, jetpackSize: number){
    super(name)
    this.jetpackSize = jetpackSize
  }

  move(distance: number){
    console.log(`${this.name} is flying`)
    super.move(distance)
  }

}

const royRobot = new FlyingRobot('Roy', 10)

royRobot.askName()
royRobot.move(10)


console.log(`Roy robot's jetpack size is ${royRobot.name}`)
console.log('Roy robot protected name', royRobot.name) // error bc name is protected in Robot class
