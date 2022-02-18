"use strict";

let dynamicCanvas;

/* TEXT */
let now, hour, minute, time;

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
let angleH, angleM;

// load JSON files
function preload() {
  timesObj = loadJSON("assets/data/times.json");
  scenesObj = loadJSON("assets/data/scenes.json");
}

function setup() {
  dynamicCanvas = new DynamicCanvas(1800, 1800);
  background(0);

  // map JSON files to corresponding arrays
  timesKey = Object.keys(timesObj);
  for (let i = 0; i < timesKey.length; i++) {
    times[i] = timesObj[timesKey[i]];
    scenes[i] = scenesObj[timesKey[i]];
  }

  // set current time and associated variables
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  setTime();
  console.log(`the time is: ${time}`);

  // check if current timestamp corresponds to an entry
  checkTime();
}

function setTime(){
  if (hour >= 10) { textHour = `${hour}`; }
  else { textHour = `0${hour}`; }
  if (minute >= 10) { textMinute = `${minute}`; }
  else { textMinute = `0${minute}`; }
  time = `${textHour}${textMinute}`;
  textTime = `${textHour}:${textMinute}`
  // debugging placeholder
  // time = `956`;
}

function checkTime() {
  console.log(`checking: ${time}`);
  if (times.includes(time)) {
    scene = scenes[times.indexOf(time)];
    // console.log(scene);
    drawTime();
  }
  else {
    drawTime();
    if (minute === 0) {
      hour = now.getHours()-1;
      minute = 59;
    }
    else {
      minute--;
    }

    setTime();
    setTimeout(() => { checkTime(); }, 1000);
  }
}

function drawTime() {
  background(0);

  angleH = map(hour,0,12,0,2*PI)-PI/2;
  angleM = map(minute,0,60,0,2*PI)-PI/2;

  push();
  translate(width/2, height/2);
  drawHourHand();
  drawMinuteHand();
  pop();
}

function drawHourHand() {
  push();
  rotate(angleH);
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

  rectMode(CENTER);
  translate(width/3.8, 0);
  rect(0, 0, width/3, height/23, 0, 30, 30, 0);
  writeMinute();
  pop();
}

function writeMinute() {
  if (scene) {
    push();
    let textLength = scene.length;
    console.log(`textLength is: ${textLength}`);
    if (textLength < 52) {
      // textSize()
      text(scene, 2, 0, 300, 50);
    }
    else if (textLength < 104) {
      text(scene, 2, -16.6, 300, 50);
    }
    else {
      text(scene, 2, -20, 300, 50);
    }
    pop();
  }
  else {
    push();
    textAlign(LEFT,CENTER);
    textSize(width/20);
    text("COPYRIGHT", 0, 2);
    pop();
  }
}

function draw() {
  dynamicCanvas.update();
}
