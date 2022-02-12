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

// // Get the image element
// let image = document.getElementById(`clown-image`);
// // Set its src attribute to a new image (a URL for a random clown image in this case)
// image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);

// Get the image element
let image = document.getElementById(`clown-image`);
// Get the value of the src property (which is the image path or URL)
let src = image.getAttribute(`src`);
// Check if the src property includes the word "clown"
if (src.includes(`clown`)) {
  // If it does, set the src property to a random clown image
  image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);
}

// // Get all elements with class "header" on the page
// let headers = document.getElementsByClassName(`header`);
// // Loop through all the elements returned
// for (let i = 0; i < headers.length; i++) {
//   // Set the color style property to red for each one
//   headers[i].style.color = `#ff0000`;
// }
//
// // Get all h2 elements
// let h2 = document.getElementsByTagName(`h2`);
// // Loop through them
// for (let i = 0; i < h2.length; i++) {
//   // Set their color to red
//   h2[i].style.color = `#ff0000`;
// }

// // Get every element matching the CSS selector .header (e.g. the header class)
// let headers = document.querySelectorAll(`.header`);
// // Loop through them
// for (let i = 0; i < headers.length; i++) {
//   // Set their font color to red
//   headers[i].style.color = `#ff0000`;
// }

// Get the first element matching the CSS selector .header (e.g. the header class)
let header = document.querySelector(`.header`);
// Set its color to red
header.style.color = `#ff0000`;

// // Create a <p> element (it starts out totally empty)
// let clownInfoP = document.createElement(`p`);
// // Set the text inside the new <p> element so it has something to say!
// clownInfoP.innerText = `Clowns are here to stay.`;
// // Select the section about clowns by its id
// let clownSection = document.getElementById(`clown-section`);
// // Append the new <p> element to the end of the clown section
// clownSection.appendChild(clownInfoP);

let newParagraph = document.createElement(`p`);
newParagraph.innerText = `new paragraph.`;
document.getElementById(`clown-section`).appendChild(newParagraph);

// // Select the item we want to remove by id
// let heading = document.getElementById(`main-heading`);
// // Remove the element by accessing its parent and using .removeChild()
// heading.parentElement.removeChild(heading); // Removing the child
// // Select the item we want to remove by id

document.getElementById(`main-heading`).parentElement.removeChild(document.getElementById(`main-heading`));
