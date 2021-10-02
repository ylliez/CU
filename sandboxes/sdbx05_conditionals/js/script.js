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
