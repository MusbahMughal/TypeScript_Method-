// Doubling Numbers:
// let person = [1, 2, 3, 4, 5]
// let person_2 = person.map ((num ) => {return num *3})
// console.log(person_2);
//  use sprcific perperty 
var look = [{ name: 'Alice', age: 30 }, { name: "kinza", age: 22 }];
var look_2 = look.map(function (name) { return name.name; });
console.log(look_2);
// Different Kinds of Loops
// JavaScript supports different kinds of loops:
// FOR---LOOP -------------------------------------------
for (var v_1 = 1; v_1 <= 10; v_1++) {
    console.log("trying to learn for loop");
}
// FOR IN LOOP-------------------------------------------------
//   for (variable in object) {
//     // code block to be executed
// }
var person = { name: 'John', age: 30, city: 'New York' };
for (var key in person) {
    console.log("".concat(key, ": ").concat(person[key]));
}
// While Loop :--------------------------------------------------
// while (condition) {
//     // code block to be executed
// }
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Do-While Loop--------------------------------------------------------
// do {
//     // code block to be executed
// } while (condition);
var v = 0;
do {
    console.log(i);
    i++;
} while (v <= 5);
// FOREACH-------Access to array value with function 
var array = ["kinza", "Ariz", "Misbah"];
array.forEach(function (value) {
    console.log(value + "Hello how're you doing", "<br>");
});
// INDEXOF----------use for check in array value is present or not  by funtion and give answer with "true" and "false" value
var message = "JavaScript is fun";
// check if message includes the string "Java"
var result = message.includes("Java");
console.log(result);
// Output: true
// TOLOWERCASE ---------------------------------------------
var name_check = "try to check case";
console.log(name_check.toLowerCase);
// TOUPPERCASE ---------------------------------------------
var name = "misbah mughal";
console.log(name.toUpperCase);
// Math.ROUND-----------------------------------------------
var number_round = 22.8;
var num_Round = Math.round(number_round);
console.log(num_Round);
// Math.RANDOM------Math.random() in JavaScript to generate a random number between 1 and 10:
var num_ramdon = Math.random();
console.log(num_ramdon);
// INCLUDES---------------------------------------------------
