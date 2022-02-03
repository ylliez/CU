
//
"use strict";

let lastVisit = {
  lastTime: null,
  lastYear: null,
  lastMonth: null,
  lastDay: null,
  lastHour: null,
  lastMinute: null,
  lastSecond: null
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  let data = JSON.parse(localStorage.getItem(`last-user-visit`));

  if (!data) {
    displayText(`Welcome`);
    displaySubtext(`Please come again!`);
    // // console.log(`${today}`);
    // let timeEla = JSON.parse(localStorage.getItem(`last-user-visit`));
    // console.log(timeEla.lastTime);``
  }

  else {
    let yearsElapsed = year - data.lastYear;
    let monthsElapsed = month - data.lastMonth;
    let daysElapsed = day - data.lastDay;
    let hoursElapsed = hour - data.lastHour;
    let minutesElapsed = minute - data.lastMinute;
    let secondsElapsed = second - data.lastSecond;

    // console.log(`${today}`);
    displayText(`You've been gone`);
    displaySubtext(`${yearsElapsed} years ${monthsElapsed} months ${daysElapsed} days ${hoursElapsed} hours ${minutesElapsed} minutes and ${secondsElapsed} seconds`);
  }

  console.log(data);
  console.log(today);

  lastVisit.lastTime = today;
  lastVisit.lastYear = year;
  lastVisit.lastMonth = month;
  lastVisit.lastDay = day;
  lastVisit.lastHour = hour;
  lastVisit.lastMinute = minute;
  lastVisit.lastSecond = second;

  localStorage.setItem(`last-user-visit`, JSON.stringify(lastVisit));
}

function draw() {
}

function displayText(textTo) {
  push();
  textSize(32);
  textAlign(CENTER);
  text(textTo, width / 2, height / 3);
  pop();
}

function displaySubtext(textTo) {
  push();
  textSize(28);
  textAlign(CENTER);
  text(textTo, width / 2, 2 * height / 3);
  pop();
}
