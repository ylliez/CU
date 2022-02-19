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
let minuteHandWidth, minuteHandHeight;
let minuteText;
let angleH, angleM, angleMB;

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

  // set current time and associated variables
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  // hour = 13;
  // minute = 45;
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
    setTimeout(() => { checkTime(); }, 5000); // change back
  }
}

function drawTime() {
  background(255);
  push();
  translate(width/2, height/2);
  fill(0);
  ellipse(0, 0, width);
  pop();

  angleH = map(hour,0,12,0,2*PI)-PI/2;
  angleM = map(minute,0,60,0,2*PI)-PI/2;
  angleMB = map(minute,0,60,0,360)-90;

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
  translate(width/15, 0);
  minuteHandWidth = width/2.5;
  minuteHandHeight = height/13;
  rect(0, -minuteHandHeight/2, minuteHandWidth, minuteHandHeight, 0, 30, 30, 0);
  document.getElementById('minuteHand').style.transform = `rotate(${angleMB}deg)`;
  document.getElementById('minuteHand').style.left = windowWidth/2 + width/15 + 500;
  writeMinute();
  pop();
}

function writeMinute() {
  if (scene) {
    document.getElementById('minuteHand').innerHTML = scene;
    // push();
    // textAlign(LEFT);
    // let textW = textWidth(scene);
    // console.log(`handW: ${minuteHandWidth}\ntextW: ${floor(textW)}`);
    // //   // textSize(textW/15);
    // // if (textW < minuteHandWidth/2) {
    // //   textSize(textW / 5);
    // //   // textSize(textW / 2.3);
    // //   // textHeight =
    // //
    // // }
    // // else if (textW < minuteHandWidth/1.5) { textSize(textW / 11); }
    //  if (textW < minuteHandWidth) { textSize(textW / 12); }
    // else if (textW < minuteHandWidth * 2) { textSize(textW / 35); }
    // else if (textW < minuteHandWidth * 3) { textSize(textW / 16); }
    // else {
    // }
    // text(scene, 10, -minuteHandHeight/2.5, minuteHandWidth, minuteHandHeight);
    // pop();
  }
  else {
    document.getElementById('minuteHand').innerHTML = "COPYRIGHT";
    push();
    translate(minuteHandWidth/2, 0);
    pop();
  }
}
// function writeMinute() {
//   if (scene) {
//     push();
//     textAlign(LEFT);
//     let textW = textWidth(scene);
//     console.log(`handW: ${minuteHandWidth}\ntextW: ${floor(textW)}`);
//     //   // textSize(textW/15);
//     // if (textW < minuteHandWidth/2) {
//     //   textSize(textW / 5);
//     //   // textSize(textW / 2.3);
//     //   // textHeight =
//     //
//     // }
//     // else if (textW < minuteHandWidth/1.5) { textSize(textW / 11); }
//      if (textW < minuteHandWidth) { textSize(textW / 12); }
//     else if (textW < minuteHandWidth * 2) { textSize(textW / 35); }
//     else if (textW < minuteHandWidth * 3) { textSize(textW / 16); }
//     else {
//     }
//     text(scene, 10, -minuteHandHeight/2.5, minuteHandWidth, minuteHandHeight);
//     pop();
//   }
//   else {
//     push();
//     translate(minuteHandWidth/2, 0);
//
//     console.log(angleMB);
//     //
//     // minuteText = createButton("COPYRIGHT");
//     document.getElementById('minuteHand').style.transform = rotate(angleMB);
//     // minuteText.position(0,0);
//     // minute.Text
//     // translate(minuteHandWidth/2, 0);
//     // textAlign(CENTER,CENTER);
//     // textSize(width/15.5);
//     // text("COPYRIGHT", 0, 0);
//     pop();
//   }
// }

function draw() {
  dynamicCanvas.update();
}
