// let backgroundShade = 0;
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   speed: 1
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(backgroundShade);
//
//   circle.x = circle.x + circle.speed;
//
//   // If the mouse is on the left side...
//   if (mouseX < width/2) {
//     // Set the fill to red
//     fill(255,0,0);
//   }
//   // Otherwise (if it's NOT on the left side, which means it's on the RIGHT!)
//   else {
//     // Set the fill to blue
//     fill(0,0,255);
//   }
//   ellipse(circle.x,circle.y,circle.size);
// }

// We need to know how many stars we want to draw in the sky
let circle = {
  x: undefined,
  y: undefined,
  size: 100
};

let dangerZone = {
  x: undefined,
  y: undefined,
  size: 100
}

function setup() {
  createCanvas(500, 500);
  background(0);

  dangerZone.x = width/2;
  dangerZone.y = height/2;
  stroke(255,0,0);
  noFill();
  ellipse(dangerZone.x,dangerZone.y,dangerZone.size)

  circle.x = random(width);
  circle.y = random(height);
  let d = dist(circle.x,circle.y,dangerZone.x,dangerZone.y);
  while (d < (circle.size/2 + dangerZone.size/2)) {
    circle.x = random(width);
    circle.y = random(height);
  }
  fill(0,255,255);
  noStroke();
  ellipse(circle.x,circle.y,circle.size);
}

function draw() {
}
