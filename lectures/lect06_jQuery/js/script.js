"use strict";

// // Get the <h1> element by its id and store it in a variable
// let $mainHeading = $(`#main-heading`);
// // Set its color property using the .css() method
// $mainHeading.css(`color`, `#339966`);

// $(`#main-heading`).css(`color`, `#339966`);

// $(`.header`).css(`color`, `#339966`);

// // This code causes jQuery to search for every element matching .header three times
// $(`.header`).css(`color`,`red`);
// $(`.header`).css(`background-color`,`black`);
// $(`.header`).css(`font-size`,`3rem`);

// // This code causes jQuery to search for every element matching .header once
// let $headers = $(`.header`);
// $headers.css(`color`,`red`);
// $headers.css(`background-color`,`black`);
// $headers.css(`font-size`,`3rem`);

// // Get the <h1> element by its id and store it in a variable
// let $mainHeading = $(`#main-heading`);
// // Set its CSS properties using the .css() method
// $mainHeading.css(`color`, `#339966`);
// $mainHeading.css(`font-size`, `5rem`);
// $mainHeading.css(`font-family`, `Helvetica, sans-serif`);
// $mainHeading.css(`background-color`, `#000000`);

// $(`#main-heading`).css({
//   "color": `#339966`,
//   "font-size": `5rem`,
//   "font-family": `Helvetica, sans-serif`,
//   "background-color": `#000000`
// });

// $(`#example-span`).text(`a Spaniel`);

// // Get the current text in the span
// let spanText = $(`#example-span`).text();
// // Reverse it
// let reverseSpanText = spanText.split(``).reverse().join(``);
// // Set the span's text to the reversed version
// $(`#example-span`).text(reverseSpanText);

// $(`#example-span`).text($(`#example-span`).text().split(``).reverse().join(``));

// // Get the HTML content of the span
// let spanHTML = $(`#example-span`).html();
// // Set the HTML content of the span as the original content wrapped in a <strong> tag
// $(`#example-span`).html(`<strong>${spanHTML}</strong>`);

// $(`#example-span`).html(`<strong>${$(`#example-span`).html()}</strong>`);

// $(`#main-heading`).attr(`contenteditable`, `true`);

// if ($(`#thicc-link`).attr(`href`) === `https://thi.cc`) {
//   $(`#thicc-link`).text(`thicc, thicc link`);
// }

// console.log($(`#thicc-link`).attr(`href`));

// // Create a <p> element
// let $newP = $(`<p></p>`);
// // Set the text inside the new <p> element so it has something to say!
// $newP.text(`Hot off the presses!`);
// // Add it to the second section (selected by id)
// $(`#second-section`).append($newP);

$(`#main-heading`).remove();
