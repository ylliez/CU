# CART263 - Lecture 05 - The Webpage
## HTML
**H**yper **T**ext **M**arkup **L**anguage is used to define and structure the content of a webpage.<br>
Stored in text file with extension `.html` or `.htm`.<br>
The landing page of a specific folder is usually `index.html`.<br>
HTML functions in a linear and hierarchical fashion.<br>
Uses markup tags (e.g. `<html>`, `<p>`, `<img>`) with attributes (e.g. `src=`, `href=`).<br>
Some markup tags are purely structural (e.g. `<div>`, `<nav>`, `<header>`, `<section>`, `<article>`, `<aside>`, `<footer>`).<br>
#### TEMPLATE
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
    <title>DEFAULT TITLE</title>
    <link rel="stylesheet" type="text/css" href="DEFAULT_STYLESHEET.css" />
    <style> </style>
    <script src="DEFAULT_LIBRARY_SCRIPT.js"></script>
  </head>

  <body>
    <header>
      <h1 class="headings">DEFAULT HEADING</h1>
    </header>

    <section id="section_1">
      <h2 class="headings">DEFAULT SUB-HEADING 1</h2>
      <p>DEFAULT PARAGRAPH.</p>
      <p>DEFAULT <em>EMPHASIZED</em> WORD.</p>
      <p>DEFAULT <strong>STRONG</strong> WORD .</p>
      <img src="assets/images/DEFAULT_IMAGE.png" alt="DEFAULT IMAGE.">
    </section>

    <section id="section_2">
      <h2 class="headings">DEFAULT SUB-HEADING 2</h2>
      <p>DEFAULT <span class="DEFAULT_SPAN">SPANNED</span> WORD.</p>
      <h3 class="headings">DEFAULT SUB-SUB-HEADING 1</h3>
      <p>DEFAULT <a href="https://.com/">LINK</a>.</p>
      <h3 class="headings">DEFAULT SUB-SUB-HEADING 2</h3>
      <a href="https://.com/">
        <img src="assets/images/DEFAULT_IMAGE.png" alt="DEFAULT IMAGE LINK.">
      </a>
    </section>

    <footer>
      <strong>DEFAULT FOOTER</strong>.
    </footer>

    <script src="js/DEFAULT_LOCAL_SCRIPT.js"></script>
  </body>
</html>
```
#### ANNOTATED
```
<!DOCTYPE html>  <!-- obligatory document type declaration -->

<html>  <!-- container for entire content -->

  <head>  <!-- undisplayed webpage information (e.g. title, css, js, meta) -->

    <meta charset="utf-8">  <!-- ??? -->
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>  <!-- ??? -->

    <title>Title of webpage</title>  <!-- title appearing on browser and bookmark -->

    <link rel="stylesheet" type="text/css" href="css/style.css" />  <!-- CSS stylesheet link -->

    <style> p { color: #ff0000; } </style>  <!-- addition style in HMTL head, overrides .css file style -->

     <!-- Library script(s) files <script src="XXX.js"></script> -->

  </head>  <!-- usually obligatory tag closure using </tag_name> -->

  <body>  <!-- webpage content opening tag -->

    <div>  <!-- invisible structuring tag -->

      <p>A paragraph of text. </p>  <!-- plain text -->

      <p>Another paragraph of text. </p>

    </div>

    <header>  <!-- more specific structuring tag -->

      <h1>Main heading</h1>  <!-- heading specified by level; h1 (top-level) -> h6 -->

    </header>

    <section id="first-section">  <!-- given an id for styling -->

      <h2>Sub-heading</h2> <!-- h2 sub-heading <h1 but >h3-6 -->

      <p>An <em>emphasized</em> word.</p>  <!-- <em> for emphasis, default italicized -->

      <p>An <strong>strong</strong> word.</p>  <!-- <strong> for importance, default bolded -->

    </section>

    <section id="second-section">

      <h2>Another <span class="sub-em">sub</span>-heading</h2> <!-- styling span with class -->

      <h3 class="sub-sub">A sub-sub-heading</h3>  <!-- given an class for styling -->

      <p>A <a href="https://thi.cc/">thicc link</a>.</p>  <!-- a hypertext link -->

      <h3 class="sub-sub" style="color: #ff00ff;">Another sub-sub-heading</h3>  <!-- span styling -->

      <img src="assets/images/clown.png" alt="A clown emoji.">  <!-- an image -->

    </section>

    <section id="third-section">

      <h2 class="image-display">A third <span class="sub-em">sub</span>-heading</h2>

      <a href="https://thi.cc/">
        <img src="assets/images/clown.png" alt="A clown emoji.">  <!-- an image in a hypertext link -->
      </a>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>

    <script src="js/script.js"></script> <!-- local script(s) -->

  </body>
</html>
```
## CSS
**C**ascading **S**tyle **S**heets is used to define the layout and style of a webpage.<br>
Stored in a `.css` file, a `<style>`tag in the HTML `<head>` or a `style` attribute in an HTML tag, with inverse priority.<br>
If in a file, called using `<link rel="stylesheet" href="CSS_FILE_PATH/CSS_FILE_NAME.css">`.<br>
Uses selectors to target specific parts, such as tags, id (single), class (group), or span (specified in HTML by `<span>`)<br>
Uses properties to specify style such as font size (e.g. `3rem`), typeface (e.g. `Helvetica`) and colour (e.g. `#4488aa`)<br>
Pseudo-classes can be added on top of existing selectors (e.g. `:hover`, `:nth-child(2)`, `:invalid`)
#### TEMPLATE
```
body { }
h1 { }
h2 { }
p { }
em { }
strong { }
.headings { }
#section_1 { }
#section_2 { }
.DEFAULT_SPAN { }
:hover { }

/* font-family: Helvetica, sans-serif; */
/* font-size: 3rem; */
/* background-color: #fff (white) / #000 (black) / #f00 (red) / #ff8888 (pink) / #ff00ff (purple) ; */
/* color: #fff (white) / #000 (black) / #f00 (red) / #ff8888 (pink) / #ff00ff (purple) ; */
/* text-decoration: overline / line-through / underline ; */
```
#### ANNOTATED
```
body { /* selector, applies styling information to body of HTML */
  font-family: Helvetica, sans-serif; /* property name: value, ?fallback; */
}

h1 {
  font-size: 3rem;  /* root em (rem) is default for overall html tag, multiples */
}

h2 {
  color: #ff8888;
}

p {
  color: #444444;
}

strong, em {  /* multiple selectors separated by comma */
  color: #4488aa;
}

#first-section {
  background-color: rgb(200,200,200);
}

.sub-sub {
 background-color: rgb(200,255,255);
}

.sub-em {
  font-family: monospace;
}

a:hover { /* pseudo-classes, added to existing selectors */
  color: yellow;
}
```
## DOM
**D**ocument **O**bject **M**odel is a JavaScript representation of the currently loaded webpage the program is running on.<br>
DOM API allows access and manipulation of HTML elements and CSS styling from scripts, using a variable called `document`.<br>
### DOM FORMATTING
#### DOM & CSS
All CSS properties are stored as strings (e.g. `5rem` ,`#000000`, `Helvetica, sans-serif`).
1. Access specific elements on the page (e.g. `document.getElementById(id_name)`)
2. Access CSS property using style (`document.getElementById(id_name).style`)
3. Access element property using brackets (e.g. ```document.getElementById(id_name).style[`font-size`]```<br>or written in camelCase (e.g. `document.getElementById(id_name).style.backgroundColor`).<br>
#### DOM & HTML
Can obtain HTML element text using `.innerText` (e.g. `document.getElementById(id_name).innerText`)<br>
Can change HTML element text (e.g. `document.getElementById(id_name).innerText = new_id_text;`)<br>
Can obtain HTML element attributes using `.getAttribute()` (e.g. ```document.getElementById(id_name).getAttribute(`src`)```)<br>
Can change HTML element attributes using `.setAttribute()` (e.g. ```document.getElementById(id_name).setAttribute(`src`, new_src)```)
#### MORE DOM
HTML elements can be accessed by other attributes returning `HTMLCollection` objects manipulable using arrays (e.g. `for` loop with `.length`)
- class: ```document.getElementsByClassName(`class_name`)```
- tag: ```document.getElementsByTagName(`tag_name`)```
- CSS selector: ```document.querySelector(`selector_name`)``` (first match) or ```document.querySelectorAll(`selector_name`)``` (every match)<br>
HTML elements can be created & displayed using `.createElement()` & `.appendChild()` (also, `.insertBefore()`, `.firstChild`, `.nextSibling`)
```
let newParagraph = document.createElement(`p`);
newParagraph.innerText = `new paragraph.`;
document.getElementById(`id_name`).appendChild(newParagraph);
```
HTML elements can be removed using `.removeChild()` through their parent element
```
let toRemove = document.getElementById(`id_name`);
toRemove.parentElement.removeChild(toRemove);
```
### DOM EVENTS
event-driven programming: event listener > trigger > event handler/callback
#### General
The event listener usually takes the form of `.addEventListener(type_string, callback_function, ?option)`<br>
Can target the whole document or a specific element<br>
The callback function automatically receives an event parameter (e.g. ```document.addEventListener(type_string, (event) => { console.log(event); });```)<br>
Optional third argument which can be used to specify options, such as `once`:
```
document.addEventListener(type_string, (event) => { console.log(event); }, { once: true });
```
#### Mouse events
Mouse event types return the event `MouseEvent`, which derives from `UIEvent` which itself derives from `Event`<br>
Important properties include `.clientX`/`.clientY` (coords of click) awa `.target` (element affected by event)<br>
`click`: triggered when user clicks the element<br>
`contextmenu`: triggered when user right-clicks<br>
`mouseenter`: triggered when user enters the element<br>
`mouseleave`: triggered when user leaves the element<br>
`mouseleave`: triggered when user leaves the element<br>
e.g. rollover function:
```
let originalText = document.getElementById(`paragraph`).innerText;
document.getElementById(`paragraph`).addEventListener(`mouseenter`, (event) => { event.target.innerText = `SECRET MESSAGE!!!`; });
document.getElementById(`paragraph`).addEventListener(`mouseleave`, (event) => { event.target.innerText = originalText; });
```
#### Keyboard events
Keyboard event types return the event `KeyboardEvent`, which has the same inheritance chain as the mouse events<br>
Important properties include `.keyCode` (ASCII) and `.key` (name) of key pressed<br>
`keydown`: triggered when user presses key<br>
`keyup`: triggered when user releases key<br>
#### Other events
`scroll` and `resize`<br>
`drag` and `drop`<br>
`cut`, `copy`, and `paste`<br>
`online` and `offline`
`focus` and `blur`
`beforeprint` and `afterprint`
#### Time
`setTimeout()`: run once after a set amount of time
```
setTimeout(() => { document.getElementById(`id_name`).style[`property`] = `value`; }, time_in_ms);
```
`setInterval()`: run repeatedly after set amount of time
```
setInterval(() => { document.getElementById(`id_name`).style[`property`] = `value`; }, time_in_ms);
```
`requestAnimationFrame()`: run once on next animation frame
```
setInterval(() => { document.getElementById(`id_name`).style[`property`] = `value`; }, time_in_ms);
```
## INPUT
Enable user input through specific elements, most simply via `<input>`, which has many types:
- `"text"`: field to be typed in by user<br>
- `"button"`: button to be pressed by user<br>
- `"range"`: slider to be moved by user<br>
- `"color"`: color picker to be chosen by user<br>
- `"date"`: date to be picked by user<br>

Some types have their own tags, such as:
- `<button>`: same as `<input type="button" value="button_value">`<br>
- `<datalist>`: for creating lists of default options<br>
- `<progress>`: for displaying progress bars<br>
- `<select>`: for displaying a selection menu<br>
- `<textarea>`: for creating a larger text entry element<br>
