"use strict";

let hour, minute, time;


// let time = `1313`;
// let time = `0000`;
let timesObj;
let timesKey = [];
// let times = [`0000`,`1513`,`1413`];
let times = [];

function preload() {
  timesObj = loadJSON("assets/data/times.json");
}

function setup() {
  var now = new Date();
  // if (now.getHours() >= 12) { h = now.getHours() - 12; }
  // else { h = now.getHours(); }
  // hour = now.getHours();
  if (now.getHours() >= 10) { hour = `${now.getHours()}`; }
  else { hour = `0${now.getHours()}`; }
  // minute = now.getMinutes();
  if (now.getMinutes() >= 10) { minute = `${now.getMinutes()}`; }
  else { minute = `0${now.getMinutes()}`; }

  time = `1920`;
  // time = `${hour}${minute}`;
  console.log(`the time is: ${time}`);

  timesKey = Object.keys(timesObj);
  for (let i = 0; i < timesKey.length; i++) {
    times[i] = timesObj[timesKey[i]];
  }
  times = times.sort();


  while(!checkTime(time)) {
    console.log(`out`);

    time = `${parseInt(time)-1}`;
  }

}

function checkTime(timeChecked) {
  console.log(timeChecked);
  if (times.includes(timeChecked)) {
    console.log(`in`);
    document.getElementById(timeChecked).style.display = "block";
    return true;
  }
  // else {
    // console.log(`out`);
    // // let newTime = time-1; NO
    // let newTimeInt = parseInt(timeChecked)-1;
    // if (newTimeInt >= 2000) {
    //   let newTimeStr = `${newTimeInt}`;
    //   checkTime(newTimeInt);
    // }
    // let newTimeCheck = toString(newTime);
    // console.log(newTimeCheck);
    // checkTime(toString(newTime));
  // }
}


function draw() {

}
