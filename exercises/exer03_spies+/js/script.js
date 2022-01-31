"use strict";

// object to store spy profile properties
let spyProfile = new Profile;
// file paths for JSON files
const TarotDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
const ObjectDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const InstrumentDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
// variables for JSON data
let tarotData;
let objectData;
let instrumentData;
// key for data storage
const DataKey = `spy-profile`;
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
  data = JSON.parse(localStorage.getItem(DataKey));
  if (!data) { generateSpyProfile(); }
  else { authenticateUser(); }
}

// display spy profile, values change based on user authentication
function draw() {
  background(255);
  displayProfile();
}

// generate spy profile object properties and save object to local storage
function generateSpyProfile() {
  // generate name property from user entry
  spyProfile.name = prompt(`What is your name?`);
  // generate alias property via random selection from instrument list
  spyProfile.alis = random(instrumentData.instruments);
  // generate alias property via random selection from object list
  spyProfile.weapon = random(objectData.objects);
  // generate password property via random selection from tarot divination list
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  // save generated profile object to local storage
  localStorage.setItem(DataKey, JSON.stringify(spyProfile));
}

// authenticate user via password
function authenticateUser() {
  let password = prompt(`Password:`);
  if (password === data.password) {
    setSpyProfile();
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
    Name: ${spyProfile.name}
    Alias: ${spyProfile.alias}
    Weapon: ${spyProfile.weapon}
    Password: ${spyProfile.password}`, width / 2, height / 2);
  text()
  pop();
}
