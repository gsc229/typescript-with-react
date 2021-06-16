"use strict";
/*Checkout docs on utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html */
// Change This:
//const updateStarship = (id: number, starship: StarShip) => {}
// to this:
const updateStarship = (id, starship) => { };
// to prevent errors:
updateStarship(1, { name: 'Explorer' }); // only want to change one required StarShip property, so use Partial<StarShip> type
const consumerReportsDataEntry = (id, raceCar) => { };
// to prevent errors you must supply the  topSpeed and safteyRating to the function
consumerReportsDataEntry(1, {});
consumerReportsDataEntry(2, { topSpeed: 100, safetyRating: 10 });
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
const starships = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false
    }
};
let JanesDrink;
JanesDrink = "milk"; // error
JanesDrink = "wisky"; // no error
let JanesSecondDrink;
JanesSecondDrink = "wisky"; // only wisky overlaps with available and drinks jane likes
/* =============== */
// NonNullable<T>
