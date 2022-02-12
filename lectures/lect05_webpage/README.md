# CART263 - Lecture 05 - The Webpage
## HTML
**H**yper **T**ext **M**arkup **L**anguage is used to define and structure the content of a webpage.<br>
Uses markup tags like `<html>`, `<p>`, `<img>` and stored in text file with extension `.html` or `.htm`.<br>
The landing page of a specific folder is usually `index.html`.<br>
### Formatting
```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <header>
      <h1>Main heading</h1>
    </header>

    <section>
      <h2>Sub-heading</h2>
      <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
      <img src="assets/images/clown.png" alt="A clown emoji.">
    </section>

    <section>
      <h2>Another sub-heading</h2>
      <p>Another paragraph of text. <strong>This is important</strong>.</p>
      <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
      <a href="https://thi.cc/">
        <img src="assets/images/clown.png" alt="A clown emoji.">
      </a>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>
  </body>
</html>
```
