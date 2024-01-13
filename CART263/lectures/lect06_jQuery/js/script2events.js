
"use strict";

// $(`#main-heading`).on(`click`, function(event) {
//   $(`#main-heading`).css(`color`,`#ff0000`);
// });

// $(`#main-heading`).on(`click`, function(event) {
//   console.log(event);
// });

// $(`#main-heading`).on(`click`, function(event) { console.log(event); });
// $(`#main-heading`).on(`click`, (event) => { console.log(event); });

// $(`.header`).on(`click`, function(event) {
//   $(this).remove();
// });

// XXXX
// $(`.header`).on(`click`, (event) => { $(this).remove(); });
// $(`.header`).on(`click`, () => { $(this).remove(); });

// $(`section`).on(`click`, function(event) {
//   $(this).append(`<p>This will be added every click.</p>`)
// });
//
// $(`section`).one(`click`, function(event) {
//   $(this).append(`<p>This will be added once only.</p>`)
// });

// $(`#main-heading`).click(function(event) {
//   $(this).css(`color`, `#ff0000`);
// });

// // XXX -> SCOPE ISSUE WITH arrow functions and jquery???
// $(`#main-heading`).click((event) => { $(this).css(`color`, `#ff0000`); });

// $(`#paragraph`).hover(
//   // Mouse enter handler
//   function(event) {
//     $(this).css(`color`, `#ff0000`);
//   },
//   // Mouse leave handler
//   function(event) {
//     $(this).css(`color`, `#000000`);
//   });

// $(`#paragraph`).hover(
//   function(event) { $(this).css(`color`, `#ff0000`); },
//   function(event) { $(this).css(`color`, `#000000`); }
//   );

// // Listen for clicks on the header class
// $(`.header`).on(`click`, function(event) {
//   // Change the clicked header to red
//   $(this).css(`color`, `#ff0000`);
//   // Stop listening for clicks on the header class
//   $(`.header`).off(`click`);


$(`.header`).on(`click`, function(event) {
  $(this).css(`color`, `#ff0000`);
  $(`.header`).off(`click`);
});
