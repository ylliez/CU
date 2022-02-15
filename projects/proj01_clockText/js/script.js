"use strict";

/* TEXT */
let hour, minute, time;

// object, key and array for timestamp JSON file (times.json)
let timesObj;
let timesKey = [];
let times = [];
// object, key and array for scenes JSON file (scenes.json)
let scenesObj;
let scenesKey = [];
let scenes = [];

/* IMAGE */
let h, m, t;
let angleH, angleM, angleS;

function preload() {
  timesObj = loadJSON("assets/data/times.json");
  scenesObj = loadJSON("assets/data/scenes.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var now = new Date();

  /* TEXT */
  if (now.getHours() >= 10) { hour = `${now.getHours()}`; }
  else { hour = `0${now.getHours()}`; }
  if (now.getMinutes() >= 10) { minute = `${now.getMinutes()}`; }
  else { minute = `0${now.getMinutes()}`; }
  time = `${hour}${minute}`;
  // debugging placeholder
  // time = `2200`;
  console.log(`the time is: ${now.getHours()-1}`);

  timesKey = Object.keys(timesObj);
  for (let i = 0; i < timesKey.length; i++) {
    times[i] = timesObj[timesKey[i]];
    scenes[i] = scenesObj[timesKey[i]];
  }

  /* IMAGE */
  if (hour >= 12) { h = hour - 12; }
  else { h = hour; }
  // if (now.getHours() >= 12) { h = now.getHours() - 12; }
  // else { h = now.getHours(); }
  m = now.getMinutes();
  // t = h + ":" + m;
  // print(t);

  angleH = map(h,0,12,0,2*PI)-PI/2;
  angleM = map(m,0,60,0,2*PI)-PI/2;

  translate(width/2, height/2);
  rectMode(CENTER);

  push();
  rotate(angleM);
  translate(200, 0);
  rect(0, 0, 300, 50);
  pop();
  console.log(height);

  push();
  rotate(angleH);
  translate(150, 0);
  rect(0, 0, 200, 50);
  pop();

  while(!checkTime(time)) {
    console.log(`COPYRIGHT ISSUE`);
    time = `${parseInt(time)-1}`;

  }

}

function checkTime(timeChecked) {
  console.log(timeChecked);
  drawTime();
  if (times.includes(timeChecked)) {
    console.log(`in`);
    console.log(times.indexOf(timeChecked));
    console.log(scenes[times.indexOf(timeChecked)]);
    // document.getElementById(timeChecked).style.display = "block";
    return true;
  }
}


function drawTime() {

}
