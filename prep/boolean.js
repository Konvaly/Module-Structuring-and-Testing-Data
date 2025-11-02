true === false; //false
5 == 2 + 4; //false
4 * 5 == "20"; //true
3 * 2 === 6; //true
Math.min(3, 4, 5) === 4; //false
let mhairiName = "Mhairi";
typeof mhairiName === "string"; //true
let mhairiAge = 28;
let isMhairiOldEnoughToDrive = true;
let kilometersMhairiDrivesToWork = 9.4;
"hello Mhairi" === `hello ${mhairiName}`; //true
"${mhairiName} is 28" === `Mhairi is ${mhairiAge}`; //true
isMhairiOldEnoughToDrive; //true
isMhairiOldEnoughToDrive === true; //true
mhairiAge >= 18; //true
29 <= mhairiAge; //false
Math.round(kilometersMhairiDrivesToWork) === 9; //true

console.log(10 + 32) === 42;

const calculation = 10 + 32;
const result = 42;
console.assert(calculation === result);
