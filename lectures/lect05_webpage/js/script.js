/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

console.log(document);

// Get the <h1> element with id "main-heading" and store it in a variable
let mainHeading = document.getElementById(`main-heading`);
// Set its color property
mainHeading.style.color = `#339966`;
mainHeading.style.fontSize = `5rem`;
mainHeading.style.fontFamily = `Helvetica, sans-serif`;
mainHeading.style.backgroundColor = `#000000`;

// let pronoun = document.getElementById(`pronoun`);
// pronoun.innerText = `you`;

// let pronoun = document.getElementById(`pronoun`);
// // Set the pronoun to "you" if it is currently "we"
// if (pronoun.innerText === `we`) {
//   pronoun.innerText = `you`;
// }

let pronoun = document.getElementById('pronoun');
pronoun.innerHTML = "<strong>you</strong>";
