"use strict";

// // Highlight the main heading
// $(`#main-heading`).addClass(`highlight`);

// Highlight the main heading, remove if user clicks on main heading
// $(`#main-heading`).addClass(`highlight`);
// $(`#main-heading`).on(`click`,function(event) { $(this).removeClass(`highlight`); });

// // If the user clicks on the main heading, toggle highlight
// $(`#main-heading`).on(`click`,function(event) { $(this).toggleClass(`highlight`); });

// // toggle highlight procedurally
// setInterval(function() { $(`#main-heading`).toggleClass(`highlight`); }, 500);

// $(`#button`).on(`click`, function(event) {
//   // Hide the main heading
//   $(`#main-heading`).hide();
// });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).hide(); });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).hide();
//   setTimeout(() => { $(`#main-heading`).show(); }, 2000);
// });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).toggle(); });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeOut(); });
// $(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeOut(2000); });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).fadeOut(2000, function() {
//     $(this).fadeIn(2000);
//   });
// });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeToggle(2000); });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).slideUp(2000); });

// $(`#button`).on(`click`, function(event) {
//   // Slide up the main heading over two seconds...
//   $(`#main-heading`).slideUp(2000, function() {
//     // .. then slide it back down over two seconds
//     $(this).slideDown(2000);
//   });
// });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).slideUp(2000, function() { $(this).slideDown(2000); }); });

// $(`#button`).on(`click`, function(event) { $(`#main-heading`).slideToggle(2000); });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5
//   },2000);
// });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5,
//     "font-size": `1rem`
//   }, 2000);
// });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5,
//     "font-size": `1rem`
//   }, 2000, function() {
//     $(this).css(`color`, `#ff0000`);
//   });
// });

// $(`#button`).on(`click`, function(event) {
//   $(`#main-heading`).animate({
//     "opacity": 0.5,
//     "font-size": `1rem`
//   }, {
//     duration: 2000,
//     easing: `linear`,
//     complete: function() {
//       $(this).css(`color`, `#ff0000`);
//     }
//   });
// });

// $(`.header`).each(function() {
//   // Get the reversed text of the current heading's text
//   let reverseText = $(this).text().split(``).reverse().join(``);
//   // Set the new reverse text
//   $(this).text(reverseText);
// });


// $(`.header`).text($(`.header`).text().split(``).reverse().join(``));
$(`.header`).each(function() { $(this).text($(this).text().split(``).reverse().join(``)); });
