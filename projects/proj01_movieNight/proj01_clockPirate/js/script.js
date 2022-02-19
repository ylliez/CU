"use strict";

let dynamicCanvas;

/* TEXT */
let now, hour, minute, time;
let nowMinute = 61;
// object, key and array for timestamp JSON file (times.json)
let timesObj;
let timesKey = [];
let times = [];
// object, key and array for scenes JSON file (scenes.json)
let scenesObj;
let scenesKey = [];
let scenes = [];
let scene;
// index of
let arrayIndex;

/* IMAGE */
let textHour, textMinute, textTime;
let minuteHandWidth, minuteHandHeight;
let angleH, angleM, angleMH;

// load JSON files
function preload() {
  timesObj = loadJSON("assets/data/times.json");
  scenesObj = loadJSON("assets/data/scenes.json");
}

function setup() {
  dynamicCanvas = new DynamicCanvas(1800, 1800);
  // map JSON files to corresponding arrays
  timesKey = Object.keys(timesObj);
  for (let i = 0; i < timesKey.length; i++) {
    times[i] = timesObj[timesKey[i]];
    scenes[i] = scenesObj[timesKey[i]];
  }

}

function draw() {
  dynamicCanvas.update();
  // get current time and associated variables
  now = new Date();
  if (now.getMinutes() !== nowMinute) {
    nowMinute = now.getMinutes();
    hour = now.getHours();
    minute = now.getMinutes();
    // set time to concatenated string
    setTime();
    // check if current timestamp corresponds to an entry
    checkTime();
  }
}

function setTime(){
  if (hour >= 10) { textHour = `${hour}`; }
  else { textHour = `0${hour}`; }
  if (minute >= 10) { textMinute = `${minute}`; }
  else { textMinute = `0${minute}`; }
  time = `${textHour}${textMinute}`;
  textTime = `${textHour}:${textMinute}`
  // DEBUG - set and/or print time
  // time = `956`;
  // console.log(`the time is: ${time}`);
}

function checkTime() {
  // DEBUG - print time being checked
  // console.log(`checking ${time}`);
  if (times.includes(time)) {
    scene = scenes[times.indexOf(time)];
    // console.log(scene);
    drawTime();
  }
  else {
    drawTime();
    decrementTime();
    setTimeout(() => { checkTime(); }, 1000); // change back
  }
}

function decrementTime() {
  if (minute === 0) {
    hour = now.getHours()-1;
    minute = 59;
  }
  else {
    minute--;
  }
  setTime();
}

function drawTime() {
  background(255);
  push();
  translate(width/2, height/2);
  fill(0);
  ellipse(0, 0, width);
  pop();

  angleH = map(hour,0,12,-PI/2,3*PI/2);
  angleM = map(minute,0,60,-PI/2,3*PI/2);
  angleMH = map(minute,0,60,0,PI/30);

  push();
  translate(width/2, height/2);
  drawHourHand();
  drawMinuteHand();
  pop();
}

function drawHourHand() {
  push();
  rotate(angleH+angleMH);
  rectMode(CENTER);
  rect(0, 0, width/10, height/23, 0, 30, 30, 0);
  writeHour();
  pop();
}

function writeHour() {
  push();
  textAlign(CENTER,CENTER);
  textSize(width/30);
  text(textTime, 0, 0);
  pop();
}

function drawMinuteHand() {
  push();
  rotate(angleM);
  translate(width/15, 0);
  minuteHandWidth = width/2.5;
  minuteHandHeight = height/13;
  rect(0, -minuteHandHeight/2, minuteHandWidth, minuteHandHeight, 0, 30, 30, 0);
  writeMinute();
  pop();
}

function writeMinute() {
  if (scene) {
    push();
    textAlign(LEFT);
    let textW = textWidth(scene);
    let textRatio =  minuteHandWidth / textW;
    // console.log(`ratio: ${textRatio}`);
    textSize(30*sqrt(textRatio));
    text(scene, 10, -minuteHandHeight/2.2, minuteHandWidth-10, minuteHandHeight);
    pop();
  }
  else {
    push();
    translate(minuteHandWidth/2, 0);
    textAlign(CENTER,CENTER);
    textSize(width/15.5);
    text("COPYRIGHT", 0, 0);
    pop();
  }
}
