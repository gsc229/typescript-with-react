/*Checkout docs on utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html */

// Partial<T>
interface StarShip {
  name: string // required
  enableHyperjump: boolean // required
}

// Change This:
//const updateStarship = (id: number, starship: StarShip) => {}

// to this:
const updateStarship = (id: number, starship: Partial<StarShip>) => {}

// to prevent errors:
updateStarship(1, { name: 'Explorer' }) // only want to change one required StarShip property, so use Partial<StarShip> type

/* ============ */

// Required<T>
interface RaceCar {
  topSpeed?: number // optional
  safetyRating?: number // optional
}

const consumerReportsDataEntry = (id: number, raceCar: Required<RaceCar>) => {}

// to prevent errors you must supply the  topSpeed and safteyRating to the function
//consumerReportsDataEntry(1, {   })
consumerReportsDataEntry(2, { topSpeed: 100, safetyRating: 10 })


/* ============= */

// ReadOnly<T>

/* 

interface A {
  x: number
  y: number
}

becomes:

Readonly<A> {
  readonly x: number
  readonly y: number
}

*/

/* ========== */

// Record<K, T>
                      // key    value          
const starships: Record<string, StarShip> = {

  Explorer1: {
    name: "Explorer1",
    enableHyperjump: true
  },
  
  Explorer2: {
    name: "Explorer2",
    enableHyperjump: false
  }

}


/* ============== */

// Pick<T, K>  and Omit<T, K>

/* 
interface A {
  x: number
  y: number
  x: number
}

Pick<A, "x" | "y"> {
  x: number
  y: number
}
Omit<A, "x" | "z"> {
  y: number
}
*/

type StarShipNameOnly = Pick<StarShip, "name">
type StarShipWithoutName = Omit<StarShip, 'name'>

/* ================ */

// Exclude<T, U>     Extract<T, U> 

type AvailableDrinks = "coffee" | "milk" | "water" | "juice" | "wisky"

type DrinksJaneDoesntLike = "coffee" | "milk" | "water" | "juice"
type DrinksJaneLikes = "wisky" | "scotch" | "vodka"
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>

//JanesDrink = "milk" // error
JanesDrink = "wisky" // no error

// Extract
let JanesSecondDrink: Extract<AvailableDrinks, DrinksJaneLikes>

JanesSecondDrink = "wisky" // only wisky overlaps with available and drinks jane likes


/* =============== */

// NonNullable<T>      ReturnType<T>
type SomeNullable = string | string[] | null | undefined

interface StarshipProperties {
  color?: 'blue' | 'red' | 'green'
}

function paintStarship( id: number, color: NonNullable<StarshipProperties['color']>) {
  return {
    id,
    color
  }
}

//paintStarship(1, undefined) // 


type PaintStarshipReturn = ReturnType<typeof paintStarship>

/* ==================== */

// InstanceType<T>

/* type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance

function Deletable<BaseClass extends Constructable<{}>> (Base: BaseClass) {
  return class extends Base {
    deleted: boolean
    delete() {}
  }
}


class Car {
  constructor(public name: string){}
}
  
class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car)
const DeletableUser = Deletable(User)

type DeletableUserInstance = InstanceType<typeof DeletableUser>
type DeletableCarInstance = InstanceType<typeof Car> // car

class Profile {
  user: DeletableUserInstance
  car: DeletableCarInstance
}

const profile1 = new Profile()
profile1.user = new DeletableUser("Steve")
profile1.car = new DeletableCar("Ferrari")
 */


// Cars and User share some functionality so we can use a mixin:


