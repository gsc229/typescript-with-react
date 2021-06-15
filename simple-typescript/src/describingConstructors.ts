interface Animal {
  name: string
  group: string | undefined
  setGroup(group: string): void
}

class Cat implements Animal {
  name: string
  group: string | undefined
  constructor(name: string) {
    this.name = name
  }
  setGroup(group: string){
    this.group = group
  }

  meow() {
    return "MEOW"
  }
}

class Dog implements Animal {
  name: string
  group: string | undefined
  constructor(name: string) {
    this.name = name
  }
  setGroup(group: string){
    this.group = group
  }
  bark(){
    return "RUFF"
  }
}

interface AnimalConstructor<T> {
  new (name: string): T
}

function initializeAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
  const animal = new Animal(name)
  animal.setGroup('mammals')

  return animal

}

const felix = initializeAnimal(Cat, 'Felix')
const ava = initializeAnimal(Dog, 'Ava')

console.log(felix.meow(), felix.meow(), felix.group, felix.name)
console.log(ava.bark(), ava.bark(), ava.group, ava.name)