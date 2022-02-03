"use strict";

// object to store spy profile properties
let profiles;
let profile = {};
let profileIndex;
let username;
let unAuth = false;
let pwAuth = false;
let userAuth = false;
let userCreated = false;
let authFirstTry = true;
let loginBtn, signupBtn, logoutBtn, deleteBtn;
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
let profilePhoto;
// const BackgroundLockedURL = 'assets/images/lock_closed.jpg';
// const BackgroundUnlockedURL = 'assets/images/lock_open.jpg';
// let backgroundLocked;
// let backgroundUnlocked;

function preload() {
  // load JSON files from URL into local variables
  tarotData = loadJSON(TarotDataURL);
  objectData = loadJSON(ObjectDataURL);
  instrumentData = loadJSON(InstrumentDataURL);
  // // load background images
  // backgroundUnlocked = loadImage(BackgroundUnlockedURL);
  // backgroundLocked = loadImage(BackgroundLockedURL);
}

// check for existence of previously stored data, if null, generate a new profile, else authenticate user
function setup() {
  createCanvas(windowWidth, windowHeight);
  // search for previous data, if found load, otherwise create empty array
  profiles = JSON.parse(localStorage.getItem(DataKey));
  if (!profiles) { profiles = []; }
  console.log(profiles);
  // create buttons for login, signup, log out and profile deletion
  createButtons();
  // set default state (unuserAuth, entry buttons, anonymous profile)
  reset();
}

// create buttons for login, signup, log out and profile deletion
function createButtons() {
  // create login button
  loginBtn = createButton(`Log In`);
  loginBtn.position(width/3+height/30,2*height/3+height/30);
  loginBtn.mousePressed(login);
  // create signup button
  signupBtn = createButton(`Sign Up`);
  signupBtn.position(2*width/3-height/9,2*height/3+height/30);
  signupBtn.mousePressed(signup);
  // create logout button
  logoutBtn = createButton(`Log Out`);
  logoutBtn.position(width/3+height/30,2*height/3+height/30);
  logoutBtn.mousePressed(logout);
  // create delete button
  deleteBtn = createButton(`Delete`);
  deleteBtn.position(2*width/3-height/9,2*height/3+height/30);
  deleteBtn.mousePressed(purgeProfile);
}

// title button display: login & signup shown, delete hidden
function buttonsTitle() {
  loginBtn.show();
  signupBtn.show();
  logoutBtn.hide();
  deleteBtn.hide();
}

// profile button display: login & signup hidden, delete shown
function buttonsProfile() {
  loginBtn.hide();
  signupBtn.hide();
  logoutBtn.show();
  deleteBtn.show();
}

// display spy profile, values change based on user authentication
function draw() {
  // background(125);
  if (pwAuth || userCreated || userAuth) {
    document.body.style.backgroundImage = "url('assets/images/lock_open.jpg')";
  }
  else {
    document.body.style.backgroundImage = "url('assets/images/lock_closed.jpg')";
  }
  displayProfile();
}

/*
SIGN-UP:
1 query username, must be entered, not only spaces and not pre-existing to proceed (1.1), otherwise staged responses (1.2)
1.1 proceed to generate profile
1.2 response stages: cancelled (1.2.1), only spaces (1.2.2) or pre-existing (1.2.3)
1.2.1 close prompt, return to default state
1.2.2 alert user to invalid username, return to default state
1.2.3 alert user to pre-existence, return to default state
*/
function signup() {
  username = prompt(`Username:`);
  // check if user entered a username, otherwise accept cancel and do nothing
  if (username != null) {
    // check if username is valid (i.e. does not contain only spaces), otherwise indicate invalididty
    if (username.trim().length) {
      // check if username already exists
      if (!usernameExists()) {
        generateProfile();
      }
    }
    else {
      alert(`
        Invalid username.
        Try again.`);
    }
  }
}

// check if username exists
function usernameExists() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].username) {
      alert(`
        Username already attributed.
        Login or choose a different username.`);
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

  // profilePhoto = loadJSON(profile.photo);
  // profilePhoto = loadImage(`https://cors-anywhere.herokuapp.com/https://100k-faces.glitch.me/random-image`);
  // profilePhoto = https://fakeface.rest/face/json
  // profile.photo =
  // add new spy profile to profiles array
  profiles.push(profile);
  // save updated profiles array to local storage
  updateProfiles();
  profileIndex = profiles.length - 1;
  set();
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
      // profilePhoto = loadImage(profile.photo);
      // pwAuth = true;
      userAuth = true;
      i = authPrompts.length;
    }
  }
  if (!userAuth) {
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

// display profile information, if user not authenticate, reverts to default values
function displayProfile() {
  push();
  noStroke();
  for (var i = 0; i < 6; i++) {
    fill(255 - i * 51);
    rect(width / 3 - i, height / 3 - i, width / 3, height / 3, 15);
  }
  pop();
  push();
  textSize(24);
  textAlign(LEFT);
  textFont(`Courier New`);
  fill(65, 255, 0);
  text(`
           USERNAME:
            ${profile.username}
           PASSWORD:
            ${profile.password}
 ALIAS: ${profile.alias}
 WEAPON: ${profile.weapon}`, width / 3, height / 3);
  // image(profilePhoto, width / 4, height / 2);
  pop();
}

function logout() {
  reset();
  alert(`Log out?`);
}

function purgeProfile() {
  alert(`Delete profile?`);
  profiles.splice(profileIndex,1);
  localStorage.setItem(DataKey, JSON.stringify(profiles));
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

function set() {
  buttonsProfile();
  userAuth = true;
}

function reset() {
  profile = new Profile();
  buttonsTitle();
  userAuth = false;
  unAuth = false;
}

function keyPressed() {
  if (keyCode == 8 && keyIsDown(SHIFT) && keyIsDown(ALT)) {
    purgeDatabase();
  }
}
