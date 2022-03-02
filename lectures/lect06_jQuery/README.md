# CART263 - Lecture 06 - jQuery
jQuery is a JavaScript library created to streamline DOM manipulation (e.g. traversal, styling, event-listening)<br>
[Homepage](https://jquery.com/) / [API](https://api.jquery.com/) / [Learn](https://learn.jquery.com/) / [URL](https://jquery.com/download/) (e.g. [jquery.min.js](https://code.jquery.com/jquery-3.6.0.min.js)) / [CDN](https://releases.jquery.com/) (e.g. `<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>`)

## Process
### Selection
Select an element using the jQuery function `$()` which takes a single argument of the CSS selector as a string  
CSS selector can be id (`#`), class (`.`)
### Action
Act on the selected element using jQuery methods (e.g. `.css()`)  
`.css('color','#f00');
.css('background-color','black');
.css('font-size','3rem');
`

!!! if repeatedly using the same selector, store jQuery selection in a variable for efficiency.
