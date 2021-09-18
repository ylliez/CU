/**
Learning - Variables
illiez
*/

"use strict";

let backgroundShade = 0;
/* R&D
let circleX = 0;
let circleY = 250;
let circleSize = 100;
let growthAmount = -1;
let speed = 1;
let acceleration = 0.2;
let circleSpeed = 1;
*/
 let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 0
}

function preload() {
}

function setup() {
  createCanvas(500,500);
//  createCanvas(640,640);
//  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(backgroundShade);
/*  R&D
background(0);
background(mouseX,mouseY,0);
//  draw a square in the centre of canvas
//  rectMode(CENTER);
//  rect(250,250,100,100);
//  rect(mouseX,mouseY,100,100);
//  rect(250,250,mouseX,mouseY)
//  rect(width/2,height/2,100,100);
//  ellipse(250,250,circleSize);
//  circleSize = 100;
//  ellipse(circleX,circleY,circleSize);
//  circleX = circleX + speed;
//  speed = speed + acceleration;
//  circleX = circleX - 1;
//  circleSize = circleSize * 0.99;
//  circleX = circleX / 1.01;
//  backgroundShade = backgroundShade + 1;
//  circleX += speed;
//  speed += acceleration;
//  circleX += circleSpeed;
ellipse(circle.x,circle.y,circle.size);
circle.x += circle.speed;
console.log("circleX is " + circleX);
//  console.log("circleY is " + circleY);
//  console.log(`circleX is ${circleX}`);
//  console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSize: ${circleSize}, circleSpeed: ${circleSpeed}`);
  let randomNumber = random();
  console.log(randomNumber);
  circle.fill = random(0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);
  circle.x += circle.speed;
  ellipse(circle.x,circle.y,circle.size);
  circle.speed = random(-5,5);
  circle.x += circle.speed;
  ellipse(circle.x,circle.y,circle.size);
  circle.speed = random(-5,5);
  circle.x += circle.speed;
  circle.y = random(0,height);
  fill(mouseX);
  ellipse(circle.x,circle.y,circle.size);
  circle.fill = map(mouseX,0,width,0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);
  circle.size = map(mouseY,height,0,100,400);
  ellipse(circle.x,circle.y,circle.size);
  circle.fill = map(circle.x,0,width,0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);
  circle.x += circle.speed;
  console.log(circle.x + "" + circle.fill);
  */
  ellipse(circle.x,circle.y,circle.size);
  circle.x += circle.speed;
  circle.x = constrain(circle.x,0,width);
  console.log(circle.x);
}
