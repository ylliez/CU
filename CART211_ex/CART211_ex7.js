let lastTit = "TEST SWAP";
let lastImg = "../CART211_media/vhugo.jpg";
const audio1 = new Audio("CART211_exAud1.wav"); //constructor, creates *new* object
const audio2 = new Audio("CART211_exAud2.mp3");
let imgPos = 0;

setInterval(moveImg,20); // function is the parameter of call, so no parentheses + # of ms

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

function moveImg() {
  if (imgPos >= 200) {
    clearInterval(moveImg);

  }
  else {
    imgPos++;
    document.getElementById('dynamicImg').style.right = imgPos+"px";
  }
}
