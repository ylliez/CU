let lastTit = "TEST SWAP";
let lastImg = "../CART211_media/vhugo.jpg";
const audio1 = new Audio("../CART211_media/boing.wav"); //constructor, creates *new* object
const audio2 = new Audio("../CART211_media/derek_cloud9.mp3");
let imgX = 0;
let imgY = 0;

//setInterval(moveImg,20); // function is the parameter of call, so no () + # of ms
document.addEventListener("keydown", keyboard); //keypress once on keydown; keydown continuously while keydown

function clickTitle() {
  audio1.play();
  let swapTit = lastTit;
  lastTit = document.getElementById('dynamicHeader').innerHTML;
  document.getElementById('dynamicHeader').innerHTML = swapTit;
}

function clickImg() {
  audio1.play();
  let swapImg = lastImg;
  lastImg = document.getElementById('dynamicImg').src; //document refers to html doc, with getEl.. an object
  document.getElementById('dynamicImg').src = swapImg;
}

function keyboard(event) {
  console.log("log test");
  if (event.keyCode == 37) { imgX -= 3; } //arrow left
  else if (event.keyCode == 39) { imgX += 3; } //arrow right
  else if (event.keyCode == 38) { imgY -= 3; } //arrow up
  else if (event.keyCode == 40) { imgY += 3; } //arrow down
  document.getElementById('dynamicImg').style.left = imgX+"px";
  document.getElementById('dynamicImg').style.top = imgY+"px";

  if (event.keyCode == 65) { //a
    let array = document.getElementsByClassName("specialp"); //refers to array
    for (let i = 0; i < array.length; i++) {
      array[i].style.fontSize = "40px";
      array[i].style.color = "#CCAABB";
    }
   }

  if (imgX <= -100 && imgY <= -50) {
    window.alert("you win!"); //not document, browser iaoi
    document.getElementById('dynamicImg').style.left = "0px";
    document.getElementById('dynamicImg').style.top = "0px";
    imgX = 0;
    imgY = 0;
  }
}
