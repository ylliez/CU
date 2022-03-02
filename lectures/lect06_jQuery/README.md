# CART263 - Lecture 06 - jQuery
jQuery is a JavaScript library created to streamline DOM manipulation (e.g. traversal, styling, event-listening)<br>
## Links
[Homepage](https://jquery.com/)  
[API](https://api.jquery.com/)  
[Learn](https://learn.jquery.com/)  
[URL](https://jquery.com/download/) (e.g. [jquery.min.js](https://code.jquery.com/jquery-3.6.0.min.js))  
[CDN](https://releases.jquery.com/) (e.g. `<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>`)

## Process
### Selection
Select an element using the jQuery function `$()` which takes a single argument of the CSS selector as a string  
CSS selector can be id (`#`), class (`.`) (for more, see [jQuery selectors](https://api.jquery.com/category/selectors/))  
__If repeatedly using the same selector, store jQuery selection in a variable for efficiency.__
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
Or a single argument, an object containing property and value
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
- `.each()`: iterating through multiple elements (e.g.
  ```
  $(`.header`).each(function() { $(this).text($(this).text().split(``).reverse().join(``)); });
  ```

### Creation
Create an element using the jQuery function with a full tag as an argument, setting its content and inserting it on page
```
let $newP = $(`<p></p>`);
$newP.text(`Hot off the presses!`);
$(`#second-section`).append($newP);
```

### Deletion
Remove elements using the jQuery `.remove()` method (e.g. ```$(`#main-heading`).remove();```)  
__Only possible through parent elements__

## Events
### `.on()`
For most events, use `.on()`, which takes two argument, event type (e.g. `click`) and callback function.
```
$(`#main-heading`).on(`click`, (event) => { $(`#main-heading`).css(`color`,`#ff0000`); });
```
The callback function automatically receives a parameter containing an object with info about the triggering event  
```
$(`#main-heading`).on(`click`, (event) => { console.log(event); });
```
One important event property, `event.target` in classic DOM, can be called using `$(this)`
```
$(`.header`).on(`click`, function(event) { $(this).remove(); });
```

### Other
#### `.one()`
Similar function to `.on()`, but can only be triggered once
```
$(`section`).on(`click`, function(event) { $(this).append(`<p>This will be added every click.</p>`) });  
$(`section`).one(`click`, function(event) { $(this).append(`<p>This will be added once only.</p>`) });
```
#### Mouse
jQuery supports all the standard DOM events such as `click`, `mouseenter`, `mouseleave`, `contextmenu`, and so on.  
Also `.hover()`
```
$(`#paragraph`).hover(
  function(event) { $(this).css(`color`, `#ff0000`); },
  function(event) { $(this).css(`color`, `#000000`); }
  );
```
#### Keyboard
jQuery supports all the standard DOM events such as `keydown`, `keyup`, and `keypress`. The `.key` and `.keyCode` properties are available on the event parameter to find out which key was interacted with.
#### Other  events
`scroll` and `resize`<br>
`drag` and `drop`<br>
`cut`, `copy`, and `paste`<br>
`online` and `offline`
`focus` and `blur`
`beforeprint` and `afterprint`

### `.off()`
Use the `.off()` method to stop listening for an event.
```
$(`.header`).on(`click`, function(event) {
  $(this).css(`color`, `#ff0000`);
  $(`.header`).off(`click`);
});
```

## Forms
Same a plain JS, except for the use of `.val()` to access form value
### Buttons
```
<input id="example-button" type="button" value="This is a button">
<script type="text/javascript">
  $(`#example-button`).on(`click`,function(event) { $(this).hide(); });
</script>
```
### Text
```
<input id="example-text-input" type="text">
<input id="example-button" type="button" value="Click me">
<script type="text/javascript">
  $(`#example-button`).on(`click`,function(event) {
    let input = $(`#example-text-input`).val();
    alert(input);
  });
</script>
```
### Slider
```
<input id="range-slider" type="range" value="0" min="0" max="100">
<script type="text/javascript">
  $(`#range-slider`).on(`change`, function(event) { console.log($(this).val()); });
</script>
```
## Extras
### Dynamic class attribution
- `.addClass()` (e.g. ```$(`#main-heading`).addClass(`highlight`);```)
- `.removeClass()` (e.g. ```$(`#main-heading`).on(`click`,function(event) { $(this).removeClass(`highlight`); });```)
- `.toggleClass()` (e.g. ```$(`#main-heading`).on(`click`,function(event) { $(this).toggleClass(`highlight`); });```)
- idem, prodecural: ```setInterval(function() { $(`#main-heading`).toggleClass(`highlight`); }, 500);```
### Display transitions
#### On/Off
- `.hide()`: set `display` to `none` (e.g. ```$(`#button`).on(`click`, function(event) { $(`#main-heading`).hide(); });```)
- `.show()`: revert `display` to previous value
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).hide();
  setTimeout(() => { $(`#main-heading`).show(); }, 2000);
});
```
- `.toggle()`: toggle element display
```
$(`#button`).on(`click`, function(event) { $(`#main-heading`).toggle(); });
```
#### Fading
- `.fadeOut()` (can specify fade time as argument)
```
$(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeOut(); });
// Or with duration as argument
// $(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeOut(2000); });
```
- `.fadeIn()`
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).fadeOut(2000, function() {
    $(this).fadeIn(2000);
  });
});
```
- `.fadeToggle()` (e.g. ```$(`#button`).on(`click`, function(event) { $(`#main-heading`).fadeToggle(2000); });```)
#### Sliding
- `.slideUp()` (e.g. ```$(`#button`).on(`click`, function(event) { $(`#main-heading`).slideUp(2000); });```)
- `.slideDown()`
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).slideUp(2000, function() {
    $(this).slideDown(2000);
  });
});
```
- `.slideToggle()` (e.g. ```$(`#button`).on(`click`, function(event) { $(`#main-heading`).slideToggle(2000); });```)
### CSS animations
Use `.animate()` to dynamically manipulate numerical CSS properties of elements  
Specify CSS propert(y/ies), destination values & amount of time to animate over (duration)
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5
  },2000);
});
```
Can animate multiple properties simultaneously
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5,
    "font-size": `1rem`
  }, 2000);
});
```
Can add callbacks
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5,
    "font-size": `1rem`
  }, 2000, function() {
    $(this).css(`color`, `#ff0000`);
  });
});
```
Duration and callback can be included in options object
```
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5,
    "font-size": `1rem`
  }, {
    duration: 2000,
    easing: `linear`,
    complete: function() {
      $(this).css(`color`, `#ff0000`);
    }
  });
});
```
__You can animate pretty much any numeric CSS property, like opacity, height, width, font-size but not everything you might expect will work (e.g. transform property, colors [unless jQuery UI lib])__
