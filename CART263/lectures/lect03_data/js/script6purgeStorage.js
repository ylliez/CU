// // remove data with removeItem() which clears named item OR clear() which carpetbombs all localStorage
// let childhood = {
//   description: "Sunny, happy, good"
// }
// localStorage.setItem(`childhood-data`,JSON.stringify(childhood));
// // Save some data in another key
// let adolescence = {
//   description: "Who am I???"
// }
// localStorage.setItem(`adolescence-data`,JSON.stringify(adolescence));
//
// console.log(localStorage.getItem(`childhood-data`)); // full
// console.log(localStorage.getItem(`adolescence-data`)); // full
//
// // removeItem() removes named item
// localStorage.removeItem(`childhood-data`)
// console.log(localStorage.getItem(`childhood-data`)); // null
// console.log(localStorage.getItem(`adolescence-data`)); // full
//
//
// // clear() deletes all stored data
// localStorage.clear();
// console.log(localStorage.getItem(`childhood-data`)); // null
// console.log(localStorage.getItem(`adolescence-data`)); // null

// clearing localStorage w/ removeItem() (also clear(), but carpetbombs all localStorage)
let clicks = 0;
let gameData = {
  highScore: 0
};
let gameReset = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`game-data`));
  if (data !== null) {
    gameData = data;
  }
}

function draw() {
  background(0);

  // Display score
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  text(clicks, width / 2, height / 2);
  pop();

  // Display high score
  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(255);
  text(`High score: ${gameData.highScore}`, width / 20, height / 20);
  pop();

  if (clicks > gameData.highScore || gameReset === true) {
    gameData.highScore = clicks;
    localStorage.setItem(`game-data`, JSON.stringify(gameData));
  }
}

function mousePressed() {
  clicks++;
}

function keyPressed() {
  if (keyCode == 32) {
    localStorage.removeItem(`game-data`) ;
    clicks = 0;
    gameReset = true;
  }
}
