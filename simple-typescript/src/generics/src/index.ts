// Generic Functions
function genericFunction<T>(x: T): T {
  return x
}

const genericArrowFunction = <T>(x: T): T => x

// Generic Interfaces

interface GenericInterface<T> {
  (a: T): T
  someProp: T
}

interface GenericInterface<T> {
  <U>(a: U): U
  someProp: T
}

// Generic Classes 
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props
  }

}

interface Expirable {
  expiryDate: Date
}
interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCakes: ChocolateCake[] = [
  {expiryDate: new Date()}
]

const vanillaCakes: VanillaCake[] = [
  {expiryDate: new Date()}
]

console.log({chocoCakes})
console.log({vanillaCakes})

interface GetExpiredItemsFunction {
  <Item extends Expirable>(item: Array<Item>): Array<Item>
}

const getExpiredItems: GetExpiredItemsFunction = items => {
  const currentDate = new Date().getTime()
  return items.filter(item => item.expiryDate.getDate() < currentDate )
}

const expiredChcoloate = getExpiredItems(chocoCakes)
const expiredValnilla = getExpiredItems(vanillaCakes)

console.log({expiredChcoloate, expiredValnilla})