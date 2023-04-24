// console.log(this);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getThis: function () {
//     return this;
//   },
// };

// console.log("this in object method", person.getThis());

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getFullName: function () {
//     return this.firstName + " " + this.lastName; // also person.firstName + " " + person.lastName
//   },
// };

// console.log("this in object method", person.getFullName());

// function test() {
//   console.log("this in a function", this);
// }

// test();

//! A note about arrow functions // IMPORTANT
/* In arrow functions, JavaScript sets the this lexically. This means that the arrow function doesn't create its own execution context 
but inherits the this from the outer function where the arrow function is defined. */

// const show = () => this; // arrow function
// console.log("arrow function this", show());

// "use strict";
//! When using strict-mode, calling this within a function will return undefined.
// function show() {
//   console.log(this);
// }

// show();

//! When using this in an event listener, this will refer to the DOM element that fired the event.
// document.getElementById("testBtn").addEventListener("click", function () {
//   console.log("this in a event", this);
// });

//! Call, Apply and Bind
const person1 = {
  fName: "Vaibhav",
  lName: "Shinde",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

const person2 = {
  fName: "Sai",
  lName: "Maddilwar",
};

const puraNaam = function (city) {
  return this.fName + " " + this.lName + " from " + city;
};

//* call: it helps you replace the value of this inside a function with whatever value you want.
// console.log(person1.fullName.call(person2)); // without argument, also we can called this function borrowing
// console.log(puraNaam.call(person2, "basmath")); // with argument

//* apply: Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
// console.log(puraNaam.apply(person2, ["basmath"]));

//* bind: Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
const bindedFun = person1.fullName.bind(person1);
console.log(bindedFun());
