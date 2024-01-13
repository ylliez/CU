"use strict";

// $(`#example-button`).on(`click`,function(event) {
//   $(this).hide();
// });

// $(`#example-button`).on(`click`,function(event) { $(this).hide(); });

// $(`#example-button`).on(`click`,function(event) {
//   // Use .val() to get the current value in the text input
//   let input = $(`#example-text-input`).val();
//   alert(input);
// });

// $(`#example-button`).on(`click`,function(event) {
//   let input = $(`#example-text-input`).val();
//   alert(input);
// });

// $(`#range-slider`).on(`change`, function(event) {
//   // Use .val() to access the current value of the slider
//   let value = $(this).val();
//   alert(value);
// });

// $(`#range-slider`).on(`change`, function(event) { alert($(this).val()); });

$(`#range-slider`).on(`change`, function(event) { console.log($(this).val()); });
