"use strict";

// object to store spy profile properties
let profiles;
let profile = {};
let profileIndex;
let loginBtn, signupBtn, logoutBtn, deleteBtn;
let username, userAuth, authAttempt, profilePassword;
let authPrompts = [`Password:`,`Try Again:`,`Last Try:`];
// file paths for JSON files
const TarotDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`
const ObjectDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const InstrumentDataURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
// variables for JSON data
let tarotData, objectData, instrumentData;
// key for data storage
const DataKey = `profiles`;

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
  resetProfile();
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
  deleteBtn.mousePressed(deleteProfile);
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
  if (userAuth) {
    document.body.style.backgroundImage = "url('assets/images/lock_open.jpg')";
  }
  else {
    document.body.style.backgroundImage = "url('assets/images/lock_closed.jpg')";
  }
  displayProfile();
}

/*
SIGN-UP: on signup button press
1 query username, must be entered, not only spaces and not pre-existing to proceed (1.1), otherwise staged responses (1.2)
1.1 proceed to generate and set profile to be displayed
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
      if (!usernameMatch()) {
        generateProfile();
      }
      else {
        alert(`
          Username already attributed.
          Login or choose a different username.`);
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
function usernameMatch() {
  for (let i = 0; i < profiles.length; i++) {
    if (username === profiles[i].username) {
      profileIndex = i;
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
  do {
    let card = random(tarotData.tarot_interpretations);
    profile.password = random(card.keywords);
  } while (textWidth(profile.password) >= 50);
  profilePassword = profile.password;
  // generate alias property via random selection from instrument list
  profile.alias = random(instrumentData.instruments);
  // generate alias property via random selection from object list
  profile.weapon = random(objectData.objects);
  // generate photo property via random selection from API
  // let url = document.getElementById("photo").src;
  // document.getElementById("photo").src =
  // let imgID = JSON.parse(document.getElementById("photo").src);


  // = "url('assets/images/lock_open.jpg')";
// console.log(url);
  // profile.photo = `assets/images/clown.png`;
  // profilePhoto = createImg(`https://100k-faces.glitch.me/random-image-url`);
  // httpGet(`https://100k-faces.glitch.me/random-image-url`, function (response) {
  //   console.log(response); });
  httpDo(`https://cors-anywhere.herokuapp.com/https://100k-faces.glitch.me/random-image-url`);
  // profilePhoto = loadJSON(photoURL);
  // profile.photo = profilePhoto;

  // ???
  // profilePhoto = loadJSON(profile.photo);
  // profile.photo = loadImage(`https://cors-anywhere.herokuapp.com/https://100k-faces.glitch.me/random-image`);
  // profilePhoto = https://fakeface.rest/face/json

  // add new spy profile to profiles array
  profiles.push(profile);
  // save updated profiles array to local storage
  updateProfiles();
  profileIndex = profiles.length - 1;
  setProfile();
}

function getName() {
  console.log(elements);

}

// saves current profiles state to local storage
function updateProfiles() {
  localStorage.setItem(DataKey, JSON.stringify(profiles));
  console.log(profiles);
}

/*
LOG-IN: on login button press
2 query username, must exist to proceed (2.1), otherwise staged responses (2.2)
2.1 proceed to authenticate password
2.2 response stages: cancelled (2.2.1) or inexistant (2.2.2)
2.2.1 close prompt, return to default state
2.2.2 alert user to inexistent username and purge on repeat failure, return to default state
*/
function login() {
  username = prompt(`Username:`);
  // check if user entered a username, otherwise accept cancel and do nothing
  if (username != null) {
    // check if username already exists
    if (usernameMatch()) {
      profile = profiles[profileIndex];
      authenticatePassword();
    }
    else {
      if (!authAttempt) {
        authAttempt = true;
        alert(`
          Username not recognized.
          Second failure will purge database.`);
      }
      else {
        purgeDatabase();
      }
    }
  }
}

// authenticate user via password
function authenticatePassword() {
  if (passwordMatch()) {
    profilePhoto = loadImage(profile.photo);
    profilePassword = `*********`;
    setProfile();
  }
  else {
    purgeProfile();
  }
}

function passwordMatch() {
  for (let i = 0; i < authPrompts.length; i++) {
    let authAttempt = prompt(authPrompts[i]);
    if (authAttempt === profile.password) {
      return true;
    }
  }
}

//
function setProfile() {
  profilePhoto = loadImage(profile.photo);
  buttonsProfile();
  userAuth = true;
  authAttempt = false;
}

// display profile information, if user not (yet) authenticated, reverts to default values
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
             ${profilePassword}

 ALIAS: ${profile.alias}
 WEAPON: ${profile.weapon}`, width / 3, height / 3, width / 3, height / 3);
  image(profilePhoto, width / 3 + 10, height / 3 + 10, 130, 140);
  pop();
}

// logout fonction, reverts display to default information
function logout() {
  if (confirm(`Log out?`)) {
    resetProfile();
  }
}

// delete fonction, purges profile and reverts display to default information
function deleteProfile() {
  if (confirm(`Delete profile?`)) {
    purgeProfile();
  }
}

// profile purge function
function purgeProfile() {
  profiles.splice(profileIndex,1);
  localStorage.setItem(DataKey, JSON.stringify(profiles));
  alert(`Profile deleted.`);
  resetProfile();
}

// database purge function
function purgeDatabase() {
  profiles = [];
  updateProfiles();
  alert(`Database purged.`);
  resetProfile();
}

// resets profile values to default
function resetProfile() {
  profile = new Profile();
  profileIndex = 0;
  profilePhoto = loadImage(profile.photo);
  profilePassword = profile.password;
  buttonsTitle();
  authAttempt = false;
  userAuth = false;
}

function keyPressed() {
  // database purge using ALT+SHIFT+DELETE
  if (keyCode === 8 && keyIsDown(SHIFT) && keyIsDown(ALT)) {
    if (confirm(`Purge database?`)) {
      purgeDatabase();
    }
  }
  // DEBUG-remove: database log using SHIFT+ENTER
  if (keyCode === 13 && keyIsDown(SHIFT)) {
    localStorage.setItem(DataKey, JSON.stringify(profiles));
    profiles = JSON.parse(localStorage.getItem(DataKey));
    console.log(profiles);
  }
}
