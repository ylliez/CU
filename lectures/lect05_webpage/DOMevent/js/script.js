// let paragraph = document.getElementById(`paragraph`);
//
// setTimeout(function () {
//   paragraph.style[`color`] = `#ff0000`;
// },2000);

// let paragraph = document.getElementById(`paragraph`);
//
// setInterval(function() {
//   let display = paragraph.style[`display`];
//   if (display === `none`) {
//     paragraph.style[`display`] = `block`;
//   }
//   else {
//     paragraph.style[`display`] = `none`;
//   }
// }, 500);

// let paragraph = document.getElementById(`paragraph`);
// let paragraphOpacity = 1; // Default opacity
// paragraph.style[`opacity`] = paragraphOpacity; // Set the default opacity
//
// fadeOut();
//
// function fadeOut() {
//   // Reduce the opacity
//   paragraphOpacity -= 0.01;
//   // Set the opacity on the paragraph
//   paragraph.style[`opacity`] = paragraphOpacity;
//   // Check if the opacity is still above 0
//   if (paragraphOpacity > 0) {
//     // If it is, call fadeOut() again on the next frame
//     // So we get an animation over time!
//     requestAnimationFrame(fadeOut);
//   }
// }

// document.addEventListener(`click`, function(event) {
//   document.body.style[`color`] = `#ff0000`;
// });

// let paragraph = document.getElementById(`paragraph`);
// paragraph.addEventListener(`click`, function(event) {
//   paragraph.style[`color`] = `#ff0000`;
// });

// let paragraph = document.getElementById(`paragraph`);
// paragraph.addEventListener(`click`, function(event) {
//   console.log(event);
// });

// let mainHeading = document.getElementById(`main-heading`);
// mainHeading.addEventListener(`click`, function(event) {
//   mainHeading.innerText = `${event.clientX},${event.clientY}`;
// });

// let paragraph = document.getElementById(`paragraph`);
// paragraph.addEventListener(`click`, function(event) {
//   // Use the event.target property to refer to the clicked element
//   event.target.style[`color`] = `#ff0000`;
// });

// let mainHeading = document.getElementById(`main-heading`);
// mainHeading.addEventListener(`click`, setRedTextColor);
// let subHeading = document.getElementById(`sub-heading`);
// subHeading.addEventListener(`click`, setRedTextColor);
// let paragraph = document.getElementById(`paragraph`);
// paragraph.addEventListener(`click`, setRedTextColor);
//
// function setRedTextColor(event) {
//   // Use event.target to change the style of the specific clicked element
//   event.target.style[`color`] = `#ff0000`;
// }

// // let paragraph = document.getElementById(`paragraph`);
// document.addEventListener(`click`, function(event) {
//   // Use the event.target property to refer to the clicked element
//   event.target.style[`color`] = `#ff0000`;
// });

// // click
// let paragraph = document.getElementById(`paragraph`);
//
// paragraph.addEventListener(`click`, function(event) {
//   event.target.style[`color`] = `#ff0000`;
// });

// let paragraph = document.getElementById(`paragraph`);
//
// paragraph.addEventListener(`mouseenter`, function(event) {
//   event.target.style[`color`] = `#ff0000`;
// });

// let paragraph = document.getElementById(`paragraph`);
//
// paragraph.addEventListener(`mouseleave`, function(event) {
//   event.target.style[`color`] = `#ff0000`;
// });

// let paragraph = document.getElementById(`paragraph`);
// let originalText = paragraph.innerText;
//
// paragraph.addEventListener(`mouseenter`, function(event) {
//   event.target.innerText = `SECRET MESSAGE!!!`;
// });
//
// paragraph.addEventListener(`mouseleave`, function(event) {
//   event.target.innerText = originalText;
// });

//
// let originalText = document.getElementById(`paragraph`).innerText;
// document.getElementById(`paragraph`).addEventListener(`mouseenter`, (event) => { event.target.innerText = `SECRET MESSAGE!!!`; });
// document.getElementById(`paragraph`).addEventListener(`mouseleave`, (event) => { event.target.innerText = originalText; });

// document.addEventListener(`contextmenu`, function(event) {
//   event.target.style[`color`] = `#ff0000`;
// });

// document.addEventListener('keydown', function(event) {
//   document.body.style[`background-color`] = `#ff0000`;
// });

// // Turn the background color red if the user presses the spacebar
// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === 32) {
//     document.body.style[`background-color`] = `#ff0000`;
//   }
// });

// // Turn the background color red if the user presses the r key
// document.addEventListener('keydown', function(event) {
//   if (event.key === `r`) {
//     document.body.style[`background-color`] = `#ff0000`;
//   }
// });

// Turn the background color red if the user presses the spacebar
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    document.body.style[`background-color`] = `#ff0000`;
  }
});

// Turn the background color white if the user releases the spacebar
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 32) {
    document.body.style[`background-color`] = `#ffffff`;
  }
});
