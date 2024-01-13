// //draw parallel lines
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   // Variables for the starting position
//   let x = 50;
//   let y = 250;
//   // For loop counts from 0 to 20 in i
//   for (let i = 0; i < 20; i++) {
//     // Drawing style
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     // Draw a 2x50 rectangle at the current position
//     rect(x, y, 2, 50);
//     // Increase x so the next rectangle is to the right
//     x = x + 5;
//   }
// }

// // same but modularized
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//   parallels();
// }
//
// function parallels() {
//   let x = 50;
//   let y = 250;
//   for (let i = 0; i < 20; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, 2, 50);
//     x = x + 5;
//   }
// }

// // same but w/ params
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//   parallels(100, 200, 40);
//   parallels(200, 100, 20);
//   parallels(200, 300, 15);
// }
//
// function parallels(x,y,paraNum) {
//   for (let i = 0; i < paraNum; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, 2, 50);
//     x = x + 5;
//   }
// }

// // same but w/ more params
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//   parallels(0, 200, 100, 1, 100, 4);
//   parallels(0, 300, 20, 10, 50, 12);
//   parallels(0, 350, 80, 5, 5, 6);
// }
//
// function parallels(x,y,paraNum,paraThick,paraHeight,paraSpace) {
//   for (let i = 0; i < paraNum; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, paraThick, paraHeight);
//     x = x + paraSpace;
//   }
// }

// //same but destructured
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(0);
//   //called each time with a single OBJECT as the argument, containing one property for each parameter
//   parallels({x: 0, y: 200, numLines: 100, lineThickness: 1, lineHeight: 100, lineSpacing: 4});
//   parallels({x: 0, y: 300, numLines: 20, lineThickness: 10, lineHeight: 50, lineSpacing: 12});
//   parallels({x: 0, y: 350, numLines: 80, lineThickness: 6, lineHeight: 5, lineSpacing: 6});
// }
//
// // Our function definition DESTRUCTURES the object into variables based on the property names
// function parallels({x,y,numLines,lineThickness,lineHeight,lineSpacing}) {
//   // We use the numLines parameter in our for-loop to determine how many
//   // lines we will draw in the loop
//   for (let i = 0; i < numLines; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     // We use the x, y, lineThickness, and lineHeight parameters to specify each rectangle
//     rect(x, y, lineThickness, lineHeight);
//     // We add the lineSpacing parameter to x to space out our lines
//     x = x + lineSpacing;
//   }
// }

//same but gradient
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  parallels(0, 200, 100, 1, 100, 4);
  parallels(0, 300, 20, 10, 50, 12);
  parallels(0, 350, 80, 5, 5, 6);
}

function parallels(x, y, numLines, lineThickness, lineHeight, lineSpacing) {
  for (let i = 0; i < numLines; i++) {
    noStroke();
    let lineFill = map(i, 0, numLines, 0, 255);
    fill(lineFill);
    rectMode(CENTER);
    rect(x, y, lineThickness, lineHeight);
    x = x + lineSpacing;
  }
}
