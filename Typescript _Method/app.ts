// Doubling Numbers:

// let person = [1, 2, 3, 4, 5]
// let person_2 = person.map ((num ) => {return num *3})
// console.log(person_2);

//  use sprcific perperty 
let look = [{ name: 'Alice', age: 30 },{name: "kinza", age :22 } ]
let look_2 = look.map ((name ) => name.name )
console.log(look_2 );

// Different Kinds of Loops
// JavaScript supports different kinds of loops:


// FOR---LOOP -------------------------------------------
for (let v = 1; v <= 10; v++){
    console.log("trying to learn for loop");
    
}

// FOR IN LOOP-------------------------------------------------

//   for (variable in object) {
//     // code block to be executed
// }
const person = {name: 'John', age: 30, city: 'New York'};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// While Loop :--------------------------------------------------
// while (condition) {
//     // code block to be executed
// }
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While Loop--------------------------------------------------------
// do {
//     // code block to be executed
// } while (condition);

let v = 0;
do {
    console.log(i);
    i++;
} while (v <= 5);
// FOREACH-------Access to array value with function 

let array = ["kinza", "Ariz", "Misbah" ]
array.forEach(function(value){
    console.log(value + "Hello how're you doing", "<br>") ;
    
})

// INDEXOF----------use for check in array value is present or not  by funtion and give answer with "true" and "false" value
const message = "JavaScript is fun";

// check if message includes the string "Java"
let result = message.includes("Java");
console.log(result);
// Output: true


// TOLOWERCASE ---------------------------------------------
let name_check= "try to check case"
console.log(name_check.toLowerCase);


// TOUPPERCASE ---------------------------------------------

let name = "misbah mughal"
console.log(name.toUpperCase);

// Math.ROUND-----------------------------------------------
let number_round = 22.8
let num_Round = Math.round(number_round)
console.log(num_Round);

// Math.RANDOM------Math.random() in JavaScript to generate a random number between 1 and 10:
let num_ramdon = Math.random()
console.log(num_ramdon);

// INCLUDES---------------------------------------------------

  
 
