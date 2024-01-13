// // basic Web Storage API
// "use strict";
//
// let userData = {
//   name: `stranger` // A default value if we don't know the user's name
// }
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   // Try to load the user data
//   let data = JSON.parse(localStorage.getItem(`last-user-visit`));
//   // Check if there's data there...
//   if (data) {
//     // If there is, then use the name property in the data
//     userData.name = data.name;
//   }
//   else {
//     // If there isn't, ask the user their name and store it in the user data
//     // prompt() brings up a simple dialog that the user can enter text in
//     // The first argument is the prompt for the user, the second argument is
//     // a default value to provide
//     userData.name = prompt(`What's ya name?`, `Tony`);
//     // Save the user data
//     localStorage.setItem(`last-user-visit`, JSON.stringify(userData));
//   }
// }
//
// function draw() {
//   background(255);
//
//   // Greet the user according to their name
//   push();
//   textSize(32);
//   textAlign(CENTER);
//   text(`Hi there, ${userData.name}.`, width / 2, height / 2);
// }

//
"use strict";

let userData = {
  lastVisit: null,
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
    // console.log(timeEla.lastVisit);``
  }

  else {
    let yearElapsed = year - data.lastYear;
    let monthElapsed = month - data.lastMonth;
    let dayElapsed = day - data.lastDay;
    let hourElapsed = hour - data.lastHour;
    let minuteElapsed = minute - data.lastMinute;
    let secondElapsed = second - data.lastSecond;

    // console.log(`${today}`);
    displayText(`You've been gone`);
    displaySubtext(`${yearElapsed} years ${monthElapsed} months ${dayElapsed} days ${hourElapsed} hours ${minuteElapsed} minutes and ${secondElapsed} seconds`);
  }

  console.log(data.lastSecond);
  console.log(second);

  userData.lastVisit = today;
  userData.lastYear = year;
  userData.lastMonth = month;
  userData.lastDay = day;
  userData.lastHour = hour;
  userData.lastMinute = minute;
  userData.lastSecond = second;

  localStorage.setItem(`last-user-visit`, JSON.stringify(userData));
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
