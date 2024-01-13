let dragX = 0;
let dragY = 0;
// let dragX = window.localStorage.getItem("storedX"); //retrieving something from local storage
// let dragY = window.localStorage.getItem("storedY");
let dragOffsetH = 0; //offset to center/position cursor on image
let dragOffsetV = 0;
let dragging = false;

// //if (typeof(storage) != "undefined") { //if storage is not of the type "undefined"
  dragX = window.localStorage.getItem("storedX"); //retrieving something from local storage
  dragY = window.localStorage.getItem("storedY");
// //}

function onLoad() {
  // dragX = window.localStorage.getItem("storedX"); //retrieving something from local storage
  // dragY = window.localStorage.getItem("storedY");
  document.getElementById('dragImg').style.left = dragX + "px";
  document.getElementById('dragImg').style.top = dragY + "px";
  document.getElementById('showXPos').innerHTML = dragX + "px";
  document.getElementById('showYPos').innerHTML = dragY + "px";
}

function mouseMove()
{
  if (dragging)
  {
  dragX = event.pageX - dragOffsetH; // event.pageX refers the x position of mouse on the page
  document.getElementById('dragImg').style.left = dragX + "px";
  dragY = event.pageY - dragOffsetV;
  document.getElementById('dragImg').style.top = dragY + "px";
  document.getElementById('showXPos').innerHTML = dragX + "px";
  document.getElementById('showYPos').innerHTML = dragY + "px";
  }
}

function mouseDown() {
  dragOffsetH =  100;//event.pageX - document.getElementById('dragImg').style.left; //attempt at making it
  dragOffsetV =  150;//event.pageY - document.getElementById('dragImg').style.top; //relative to cursor pos
  dragging = true;
}

function mouseUp() {
  dragging = false;
  window.localStorage.setItem("storedX",dragX); //saving something to local storage (name,value)
  window.localStorage.setItem("storedY",dragY);
}
