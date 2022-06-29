// Spread Operators
// In Array
Spead & Rest Operators **Spread and rest ** are three dot ...

//Spread - Used to split up Array elements and Object Properties


let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4];
console.log(newNumbers);

// In Objects

let person = {
  name: "Sandeep",
};
let newObject = { ...person, age: 32 };
console.log(newObject);
