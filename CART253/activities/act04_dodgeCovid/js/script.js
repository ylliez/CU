/**
Dodging COVID-19
illiez
*/

// create SARS-COV2 ellipse
let sars = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 5,
  ax: 0.5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}

// create user ellipse
let you = {
  x: undefined,
  y: undefined,
  size: 50,
  fill: {
    r: 255,
    g: 255,
    b: 255
  }
}

let staticAmt = 1000;


function setup() {
  createCanvas(windowWidth,windowHeight);

  //establish starting coordinates of SARS-COV2 ellipse
  sars.x = 0 - sars.size/2;
  sars.y = random(height);
}

function draw() {
  background(0);

  // draw background static
  for (var i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    stroke(255);
    point(x,y);
  }

  // draw user ellipse
  you.x = mouseX;
  you.y = mouseY;
  push();
  noStroke();
  fill(you.fill.r,you.fill.g,you.fill.b);
  ellipse(you.x,you.y,you.size);
  pop();

  // draw SARS-COV2 ellipse
  push();
  noStroke();
  fill(sars.fill.r,sars.fill.g,sars.fill.b);
  ellipse(sars.x,sars.y,sars.size);
  pop();

  sars.x += sars.vx;

  // reset SARS ellipse to left if reaches right
  if (sars.x > width+sars.size/2) {
    sars.x = 0-sars.size/2;
    sars.y = random(height);
    sars.vx += sars.ax;
  }

  // stop if ellipses overlap
  let d = dist(sars.x,sars.y,you.x,you.y);
  if (d < (sars.size/2 + you.size/2)) {
    noLoop();
  }

}
