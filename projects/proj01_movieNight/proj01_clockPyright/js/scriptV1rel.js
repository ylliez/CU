"use strict";

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
  createCanvas(windowWidth, windowHeight);
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
    console.log(scene);
    drawTime(scene);
  }
  else {
    drawTime("COPYWRITE");
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
  translate(14, 0);
  rect(0, -12.5, 66, 25);
  writeHour();
  pop();
}

function writeHour() {
  push();
  textAlign(LEFT,CENTER);
  textSize(25);
  text(textTime, 2, 0);
  pop();
}

function drawMinuteHand() {
  push();
  rotate(angleM);
  translate(100, 0);
  rect(0, -25, 300, 50);
  writeMinute();
  pop();
}

function writeMinute() {
  if (scene) {
    push();
    let textLength = scene.length;
    console.log(textLength);
    if (textLength < 52) {
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
    textSize(50);
    text("COPYRIGHT", 1, 2);
    pop();
  }
}
