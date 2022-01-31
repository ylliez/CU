"use strict";

// object to store spy profile properties
let profiles;
let profile = {};
let username;
let userAuthenticated = false;
// file paths for JSON files
const TarotDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
const ObjectDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const InstrumentDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
// variables for JSON data
let tarotData;
let objectData;
let instrumentData;
// key for data storage
const DataKey = `profiles`;
// stored data
let data;

// load JSON files from URL into local variables
function preload() {
  tarotData = loadJSON(TarotDataURL);
  objectData = loadJSON(ObjectDataURL);
  instrumentData = loadJSON(InstrumentDataURL);
}

// check for existence of previously stored data, if null, generate a new profile, else authenticate user
function setup() {
  createCanvas(windowWidth, windowHeight);
  profiles = JSON.parse(localStorage.getItem(DataKey));
  if (!profiles) { profiles = []; }
// username = prompt(`Username:`);
  // if (!profiles) { generateSpyProfile(); }
  // else {
    // queryUser();
    // authenticateUser();
  // }
}

// display spy profile, values change based on user authentication
function draw() {
  background(125);
  if (userAuthenticated) {
    displayProfile();
  }
}

function signup() {
  generateSpyProfile();
}

// generate new spy profile object, push to profiles array and save object to local storage
function generateSpyProfile() {
  // create new object from class
  profile = new Profile();
  // generate name property from user entry
  username = prompt(`Username:`);
  profile.name = username;
  // profile.name = `i`;
  // generate alias property via random selection from instrument list
  profile.alias = random(instrumentData.instruments);
  // generate alias property via random selection from object list
  profile.weapon = random(objectData.objects);
  // generate password property via random selection from tarot divination list
  let card = random(tarotData.tarot_interpretations);
  profile.password = random(card.keywords);
  // save generated profile object to local storage
  console.log(profile.name);
  console.log(profile);
  // define profiles as new array (also check/create: "profiles = profiles || [];""
  profiles = [];
  profiles.push(profile);
  localStorage.setItem(DataKey, JSON.stringify(profiles));
  userAuthenticated = true;
}

// authenticate user via password
function authenticateUser() {
  let pwTry = prompt(`Password:`);
  if (pwTry !== profile.password) {
    let pwTry2 = prompt(`Second Try:`);
    if (pwTry2 !== profile.password) {
      let pwTry3 = prompt(`Last Try:`);
      if (pwTry3 !== profile.password) {
        localStorage.clear();
        console.log(`Purged database.`);
      }
    }
  }
  else {
    console.log(`password found!`);
    userAuthenticated = true;
  }
}

function login() {
  username = prompt(`Username:`);
  console.log(username);
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].name) {
      console.log(`username found!`);
      profile = profiles[i];
      authenticateUser();
    }
  }
}

// function mousePressed() {
//   setTimeout(clearButtons, 100);
//   // clearButtons();
// }

function clearButtons() {
  document.getElementById("buttons").style.display = 'none';
  // document.getElementById("signupBtn").style.display = 'none';
  // console.log(document.getElementById("loginBtn").style.display);
}

function queryUser() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].name) {
      profile = profiles[i];
      authenticateUser();
    }
    else if (username === `new`) {

    }
  }
}

// populate profile with previously stored profile data
function setSpyProfile() {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.weapon = data.weapon;
  spyProfile.password = data.password;
}

// display profile information, if user not authenticate, reverts to default values
function displayProfile() {
  push();
  textSize(32);
  textAlign(CENTER);
  text(`
    Name: ${profile.name}
    Alias: ${profile.alias}
    Weapon: ${profile.weapon}
    Password: ${profile.password}`, width / 2, height / 3);
  text()
  pop();
}

function keyPressed() {
  if (keyCode == 8) {
    if (keyIsDown(SHIFT)) {
      if (keyIsDown(ALT)) {
        localStorage.clear();
        console.log(`Purged database.`);
      }
      else {
        localStorage.removeItem(DataKey);
        console.log(`Purged profile.`);
      }
    }
  }
}
