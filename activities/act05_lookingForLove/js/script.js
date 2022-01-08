/**
Looking For Love
illiez

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let state = `title`;
let p1;
let p2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pInit();
}

function draw() {
  background(0);
  switch (state) {
    case `title`: title(); break;
    case `sim`: sim(); break;
    case `win`: win(); break;
    case `lose`: lose(); break;
    default:
  }
}

function title() {
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(`LOOKING FOR LOVE`, width/2, height/3);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(21);
  textStyle(BOLD);
  fill(200, 200, 200);
  stroke(0);
  strokeWeight(2);
  text(`Press any key to start`, width/2, 2*height/3);
  pop();

  pDraw(p1.pos,p1.size,p1.col);
  pDraw(p2.pos,p2.size,p2.col);
}

function pInit() {
  p1 = {
    pos: { x: windowWidth/10, y: windowHeight/2 },
    size: (windowWidth+windowHeight)/20,
    velSeed: 5,
    vel: { vx: 0, vy: 0 },
    col: { r: 255, g: 0, b: 0, a: 100 }
  }

  p2 = {
    pos: { x: windowWidth - windowWidth/10, y: windowHeight/2 },
    size: (windowWidth+windowHeight)/20,
    velSeed: 5,
    vel: { vx: 0, vy: 0 },
    col: { r: 255, g: 255, b: 255, a: 100 }
  }

  p1.vel.vx = random(-p1.velSeed,p1.velSeed);
  p1.vel.vy = random(-p1.velSeed,p1.velSeed);
  p2.vel.vx = random(-p2.velSeed,p2.velSeed);
  p2.vel.vy = random(-p2.velSeed,p2.velSeed);
}

function pDraw(pos,size,col) {
  stroke(0);
  strokeWeight(2);
  fill(col.r, col.g, col.b, col.a);
  ellipse(pos.x,pos.y,size);
}

function pMove() {
  p1.pos.x += p1.vel.vx;
  p1.pos.y += p1.vel.vy;
  p2.pos.x += p2.vel.vx;
  p2.pos.y += p2.vel.vy;

  pDraw(p1.pos,p1.size,p1.col);
  pDraw(p2.pos,p2.size,p2.col);
}

function mousePressed() {
  if (state === `title`) {
    p1.col.a = 255;
    p2.col.a = 255;
    state = `sim`; }
  if (state === (`win`||`lose`)) {
    state = `title`;
  }
}

function sim() {
  pMove();
  isOut();
  isOverlap();
}

function isOut() {
  if ( p1.pos.x <= 0 || p1.pos.x >= width || p1.pos.y <= 0 || p1.pos.y >= height || p2.pos.x <= 0 || p2.pos.x >= width || p2.pos.y <= 0 || p2.pos.y >= height) {
    lose();
  }
}

function isOverlap() {
  d = dist(p1.pos.x,p1.pos.y,p2.pos.x,p2.pos.y);
  if (d < (p1.size/2 + p2.size/2)) {
    win();
  }
}

function win() {
  noLoop();
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(`YOU WIN!`, width/2, height/2);
  pop();
}

function lose() {
  noLoop();
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(`YOU LOSE`, width/2, height/2);
  pop();
}
