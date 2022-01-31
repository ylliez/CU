"use strict";

// object to store spy profile properties
let profiles;
let profile = {};
let username;
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
  username = prompt(`Username:`);
  if (!profiles) { console.log(`x`); generateSpyProfile(); }
  else {
    queryUser();
    // authenticateUser();
  }
}

// display spy profile, values change based on user authentication
function draw() {
  background(255);
  displayProfile();
}

// generate spy profile object properties and save object to local storage
function generateSpyProfile() {
  // profiles = profiles || [];
  profile = new Profile();
  // generate name property from user entry
  profile.name = username;
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
}

// authenticate user via password
function authenticateUser() {
  let password = prompt(`Password:`);
  if (password === data.password) {
    setSpyProfile();
  }
}

function queryUser() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].name) {
      profile = profiles[i];
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
  textAlign(LEFT);
  text(`
    Name: ${profile.name}
    Alias: ${profile.alias}
    Weapon: ${profile.weapon}
    Password: ${profile.password}`, width / 2, height / 2);
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
        console.log(`Purged all profiles.`);
      }
    }
    else {
      localStorage.removeItem(DataKey);
      console.log(`Purged profile.`);
    }
  }
}
