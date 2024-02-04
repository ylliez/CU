const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const brightness = require('brightness');

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Set the initial brightness level (0.5 is the default)
// brightness.set(0.5);

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

app.get('/increase-brightness', (req, res) => {
  brightness.get().then(currentBrightness => {
    if (currentBrightness < 1) {
      brightness.set(currentBrightness + 0.1);
    }
  });
  res.redirect('/');
});

app.get('/decrease-brightness', (req, res) => {
  brightness.get().then(currentBrightness => {
    if (currentBrightness > 0) {
      brightness.set(currentBrightness - 0.1);
    }
  });
  res.redirect('/');
});
