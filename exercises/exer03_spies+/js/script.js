"use strict";

// object to store spy profile properties
let profiles;
let profile = {};
let profileIndex;
let username;
let unAuth = false;
let pwAuth = false;
let userCreated = false;
let authFirstTry = true;
let loginBtn;
let signupBtn;
let deleteBtn;
let authPrompts = [`Password:`,`Try Again:`,`Last Try:`];
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
  // search for previous data, if found load, otherwise create empty array
  profiles = JSON.parse(localStorage.getItem(DataKey));
  if (!profiles) { profiles = []; }
  console.log(profiles);
  uiSetup();
}

function uiSetup() {
  background(125);
  loginBtn = createButton(`Log In`);
  loginBtn.position(width/3,height/2);
  loginBtn.mousePressed(login);

  signupBtn = createButton(`Sign Up`);
  signupBtn.position(2*width/3,height/2);
  signupBtn.mousePressed(signup);

  deleteBtn = createButton(`Delete Profile`);
  deleteBtn.position(width/2,3*height/4);
  deleteBtn.mousePressed(purgeProfile);

  buttonsTitle();
}

// display spy profile, values change based on user authentication
function draw() {
  background(125);
  if (pwAuth || userCreated) {
    displayProfile();
  }
  else {
  }
}

function signup() {
  username = prompt(`Username:`);
  if (!usernameOverwriting()) {
    buttonsProfile();
    generateProfile();
  }
}

function usernameOverwriting() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].username) {
      alert(`
        Username already attributed.
        Login or choose a different username.`)
      return true;
    }
  }
}

// generate new spy profile object, push to profiles array and save object to local storage
function generateProfile() {
  // create new object from class
  profile = new Profile();
  // generate name property from user entry
  profile.username = username;
  // generate password property via random selection from tarot divination list
  let card = random(tarotData.tarot_interpretations);
  profile.password = random(card.keywords);
  // generate alias property via random selection from instrument list
  profile.alias = random(instrumentData.instruments);
  // generate alias property via random selection from object list
  profile.weapon = random(objectData.objects);
  // add new spy profile to profiles array
  profiles.push(profile);
  // save updated profiles array to local storage
  updateProfiles();
  userCreated = true;
  profileIndex = profiles.length - 1;
}

function updateProfiles() {
  localStorage.setItem(DataKey, JSON.stringify(profiles));
  console.log(profiles);
}

function login() {
  buttonsProfile();
  username = prompt(`Username:`);
  authenticateUsername();
}

function authenticateUsername() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].username) {
      profileIndex = i;
      unAuth = true;
      i = profiles.length;
    }
  }
  if (unAuth) {
    profile = profiles[profileIndex];
    authenticatePassword();
  }
  else {
    if (authFirstTry) {
      authFirstTry = false;
      usernameUnrecognized();
    }
    else {
      purgeDatabase();
    }
  }
}

// authenticate user via password
function authenticatePassword() {
  for (let i = 0; i < authPrompts.length; i++) {
    let authAttempt = prompt(authPrompts[i]);
    if (authAttempt === profile.password) {
      console.log(`password found!`);
      pwAuth = true;
      i = authPrompts.length;
    }
  }
  if (!pwAuth) {
    purgeProfile();
  }
}

function usernameUnrecognized() {
  alert(`
    Username not recognized.
    Second failure will purge database.`)
  username = prompt(`Username:`);
  authenticateUsername();
}

function buttonsTitle() {
  loginBtn.show();
  signupBtn.show();
  deleteBtn.hide();
}

function buttonsProfile() {
  loginBtn.hide();
  signupBtn.hide();
  deleteBtn.show();
}

// display profile information, if user not authenticate, reverts to default values
function displayProfile() {
  push();
  textSize(32);
  textAlign(LEFT);
  text(`
    Username: ${profile.username}
    Password: ${profile.password}
    Alias: ${profile.alias}
    Weapon: ${profile.weapon}`, width / 3, height / 3);
  text()
  pop();
}

function keyPressed() {
  if (keyCode == 8 && keyIsDown(SHIFT) && keyIsDown(ALT)) {
    purgeDatabase();
  }
}

function purgeProfile() {
  profiles.splice(profileIndex,1);
  localStorage.setItem(DataKey, JSON.stringify(profiles));
  alert(`Purged profile.`);
  reset();
}

function purgeDatabase() {
  if (profiles) {
    localStorage.removeItem(DataKey);
    alert(`Purged database.`);
  }
  else {
    console.log(`No database to purge.`);
  }
}

function reset() {
  buttonsTitle();
  pwAuth = false;
  userCreated = false;
  // setup();
}
