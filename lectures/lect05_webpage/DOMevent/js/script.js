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

let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  console.log(event);
});
