"use strict";
// Generic Functions
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
// Generic Classes 
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [
    { expiryDate: new Date() }
];
const vanillaCakes = [
    { expiryDate: new Date() }
];
console.log({ chocoCakes });
console.log({ vanillaCakes });
const getExpiredItems = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
const expiredChcoloate = getExpiredItems(chocoCakes);
const expiredValnilla = getExpiredItems(vanillaCakes);
console.log({ expiredChcoloate, expiredValnilla });
