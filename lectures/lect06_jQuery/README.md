# CART263 - Lecture 06 - jQuery
jQuery is a JavaScript library created to streamline DOM manipulation (e.g. traversal, styling, event-listening)<br>
[Homepage](https://jquery.com/) / [API](https://api.jquery.com/) / [Learn](https://learn.jquery.com/) / [URL](https://jquery.com/download/) (e.g. [jquery.min.js](https://code.jquery.com/jquery-3.6.0.min.js)) / [CDN](https://releases.jquery.com/) (e.g. `<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>`)

## Process
### Selection
Select an element using the jQuery function `$()` which takes a single argument of the CSS selector as a string  
CSS selector can be id (`#`), class (`.`)  
!!! if repeatedly using the same selector, store jQuery selection in a variable for efficiency.
### Action
Act on the selected element using jQuery methods (e.g. `.css()`)
A jQuery method can take two arguments, property and value, as strings
```
let $mainHeading = $(`#main-heading`);
$mainHeading.css(`color`, `#339966`);
$mainHeading.css(`font-size`, `5rem`);
$mainHeading.css(`font-family`, `Helvetica, sans-serif`);
$mainHeading.css(`background-color`, `#000000`);
```
Or a single argument, an object containing property and value (e.g.
```
$(`#main-heading`).css({
  "color": `#339966`,
  "font-size": `5rem`,
  "font-family": `Helvetica, sans-serif`,
  "background-color": `#000000`
});
```
jQuery methods include:
- `.css()`: element styling
- `.text()`: element text content (e.g. ```$(`#example-span`).text($(`#example-span`).text().split(``).reverse().join(``));```)
- `.html()`: element HTML content (e.g. ```$(`#example-span`).html(`<strong>${$(`#example-span`).html()}</strong>`);```)
- `.attr()`: element attribute (e.g. ```$(`#main-heading`).attr(`contenteditable`, `true`);``` || ```.attr(`href`)```)

### Creation
Create an element using the jQuery function with a full tag as an argument, setting its content and inserting it on page (e.g. ```
let $newP = $(`<p></p>`);
$newP.text(`Hot off the presses!`);
$(`#second-section`).append($newP);
```
)
### Deletion
Remove elements using the jQuery `.remove()` method (e.g. ```$(`#main-heading`).remove();```)  
!!Only possible through parent elements!!

## Events
