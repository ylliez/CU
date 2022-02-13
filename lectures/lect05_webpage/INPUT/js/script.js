// button press
// let button = document.getElementById(`example-button`);
//
// button.addEventListener(`click`, function(event) {
//   event.target.style[`display`] = `none`;
// });

// // enter text and button press
// let textInput = document.getElementById(`example-text-input`);
// let button = document.getElementById(`example-button`);
//
// button.addEventListener(`click`, function(event) {
//   // We can get the text in the text input using its .value property
//   let input = textInput.value;
//   alert(input);
// });

// // enter text and press enter
// let textInput = document.getElementById(`example-text-input`);
//
// textInput.addEventListener(`keydown`, function(event) {
//   // Check if they hit return
//   if (event.keyCode === 13) {
//     // Show the content of the text input
//     let input = event.target.value;
//     alert(input);
//   }
// });

// // slider with button
// let slider = document.getElementById(`range-slider`);
// let button = document.getElementById(`print-button`);
//
// button.addEventListener(`click`, function(event) {
//   // We can get the current value set on the slider through its .value property
//   let value = slider.value;
//   alert(value);
// });

// // slider with change
// let slider = document.getElementById(`range-slider`);
//
// // Listen for changes to the slider
// slider.addEventListener(`change`, function(event) {
//   // Print out the current value
//   let value = event.target.value;
//   alert(value);
// });

// // color picker
// let colorPicker = document.getElementById(`color-picker`);
//
// // Set the background color of the document when the color
// // picker is used
// colorPicker.addEventListener(`input`, function(event) {
//   let color = event.target.value;
//   document.body.style[`background-color`] = color;
// });

// // Password
// let passwordInput = document.getElementById(`password-input`);
// let loginButton = document.getElementById(`login-button`);
//
// // Check the password when they click the button
// loginButton.addEventListener(`click`, function(event) {
//   // Get the password value entered
//   let password = passwordInput.value;
//   // Check if it's correct and notify the user
//   if (password === `password`) {
//     alert(`Logged in!`);
//   }
//   else {
//     alert(`Wrong password!`);
//   }
// });

// date colorPicker
let datePicker = document.getElementById(`date-picker`);

// Alert the date chosen each time it's changed
datePicker.addEventListener(`change`, function(event) {
  let date = event.target.value;
  alert(date);
});
