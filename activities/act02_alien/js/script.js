/**
alien drawing
illiez

drawing of an alien
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
draws alien
*/
function setup() {
//create canvas
createCanvas(640,480);
//set background colour
background(255,209,220);
//draw body
noStroke();
fill(127);
ellipse(320,480,300,200);
//draw head
fill(90);
ellipse(320,240,200,400);
//draw eyes
fill(0);
ellipse(260,240,25,100);
ellipse(380,240,25,100);
//draw nostrils
fill(25);
ellipse(305,280,10,10);
ellipse(335,280,10,10);
//draw mouth
stroke(255,0,0);
strokeWeight(3);
rectMode(CENTER);
rect(320,320,100,25)
}

/**
Description of draw()
*/
function draw() {

}
