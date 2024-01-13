// // localStorage basics using setItem & getItem
// function setup() {
//   createCanvas(windowWidth,windowHeight);
//
//   localStorage.setItem(`meaning-of-life`, `Be excellent to each other.`);
//
//   let meaning = localStorage.getItem(`meaning-of-life`);
//
//   console.log(meaning);
// }
//
// function draw() {
//   background(0);
// }

// // localStorage Object with JSON.stringify & JSON.parse
// function setup() {
//   createCanvas(windowWidth,windowHeight);
//
//   let data = {
//   text: `Be excellent to each other.`,
//   number: 10,
//   boolean: true,
//   array: [1,2,3]
//   };
//
//   localStorage.setItem(`my-data`, JSON.stringify(data)); // Save the data as a string
//
//   let loadedData = JSON.parse(localStorage.getItem(`my-data`)); // Load and parse the data!
//
//   console.log(loadedData.text); // "Be excellent to each other."
//   console.log(loadedData.number); // 10
//   console.log(loadedData.boolean); // true
//   console.log(loadedData.array); // [1, 2, 3]
// }
//
// function draw() {
//   background(0);
// }

// // localStorage use case - click attack
// let clicks = 0;
// let highScore = 0;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   if (localStorage.getItem(`highScore`) !== null) {
//     highScore = localStorage.getItem(`highScore`);
//   }
// }
//
// function draw() {
//   background(0);
//
//   // Display high score
//   push();
//   textSize(64);
//   textAlign(CENTER);
//   textStyle(BOLD);
//   fill(255, 255, 0);
//   text(highScore, width / 3, height / 2);
//   pop();
//
//   // Display the number of clicks
//   push();
//   textSize(64);
//   textAlign(CENTER);
//   textStyle(BOLD);
//   fill(255, 255, 0);
//   text(clicks, 2* width / 3, height / 2);
//   pop();
//
// }
//
// function mousePressed() {
//   // Track clicks
//   clicks++;
//   // checks if current score is superior to high score
//   if (clicks > highScore) {
//     localStorage.setItem(`highScore`, clicks);
//   }
// }

// with object storage
// Track clicks
let clicks = 0;
// A place to store the game data
let gameData = {
  highScore: 0 // Start the high score at 0 by default
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Try to load the game data (remembering to parse it first)
  let data = JSON.parse(localStorage.getItem(`game-data`));
  // Check if there's anything there
  if (data !== null) {
    // There is data! So replace our default game data with the save data
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
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();

  // Display high score
  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(`High score: ${gameData.highScore}`, width / 20, height / 20);
  pop();
}

function mousePressed() {
  // They clicked!
  clicks++;
  // Check if this beats the current high score...
  if (clicks > gameData.highScore) {
    // Set the new high score
    gameData.highScore = clicks;
    // Save the game data to remember for next time, remembering to stringify the data first
    localStorage.setItem(`game-data`, JSON.stringify(gameData));
  }
}
