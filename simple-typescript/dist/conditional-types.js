"use strict";
function someFunction(value) {
    const someOtherFunction = (someArg) => {
        const a = someArg;
    };
    return someOtherFunction;
}
const result = someFunction(""); // Type A
const result2 = someFunction(true); // Type B
