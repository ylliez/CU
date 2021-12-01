let cssCount = 0;

function cssChange() {
  switch (cssCount) {
    case 0:
    document.getElementById('spanChange').style.cursor = "wait";
    cssCount++;
    break;
    case 1:
    document.getElementById('spanChange').style.cursor = "pointer";
    document.getElementById('spanChange').style.color = "#FFFFFF";
    cssCount++;
    break;
    case 2:
    document.getElementById("bushVid").style.top = "0";
    document.getElementById("bushVid").play();
    document.getElementById("stopBtn").style.top = "50%";
    document.body.style.cursor = "none";
    document.getElementById('dragImg').style.opacity = "100%";
    break;
    default: break;
  }
}

function btnClick() {
  let posX = Math.random()*100;
  let posY = Math.random()*100;
  if (posX < 80){
    document.getElementById('stopBtn').style.left = posX+"%";
    document.getElementById('stopBtn').style.top = posY+"%";
  }
  else {
    document.getElementById("bushVid").pause();
    document.getElementById("stopBtn").style.top = "100%";
  }
}

function mouseMove() {
  document.getElementById('dragImg').style.left = event.pageX + 1 + "px";
  document.getElementById('dragImg').style.top = event.pageY + 1 + "px";
  let target = { x: document.getElementById('not').offsetLeft+44, y: document.getElementById('not').offsetTop+59 };
  let cursor = { x: document.getElementById('dragImg').offsetLeft, y: document.getElementById('dragImg').offsetTop };
  let radians = Math.atan2(cursor.x - target.x, cursor.y - target.y);
  let degree = (radians * (180 / Math.PI) * -1) + 180;
  document.getElementById('dragImg').style.transform = "rotate(" + degree + "deg)";
}

// function calculateRotate() {
//   let center = { x: document.getElementById('not').style.left, y: document.getElementById('not').style.top };
//   let cursor = { x: document.getElementById('dragImg').style.left, y: document.getElementById('dragImg').style.top };
//   let radians = Math.atan2(cursor.x - center.x, cursor.y - center.y);
//   let degree = (radians * (180 / Math.PI) * -1) + 180;
//   return degree;
// }

// let currentCursorPos;
// const cursorEl = document.querySelector("#cursor");
// const cursorImageEl = document.querySelector('#cursor > img');
//
// window.addEventListener("mousemove", event => {
//   currentCursorPos = { x: event.clientX, y: event.clientY };
//   if (document.querySelector(".container:hover")) {
//       cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
//     cursorImageEl.style.opacity = "1"
//     cursorEl.style.display = "inline-block"
//   } else {
//     cursorEl.style.display = "none"
//   }
//   if(document.querySelector(".left:hover")){
//     cursorImageEl.style.transform = `rotate(-270deg)`
//   } else if(document.querySelector(".right:hover")){
//     cursorImageEl.style.transform = `rotate(-90deg)`
//   } else{
//     cursorImageEl.style.transform = `rotate(180deg)`
//   }
// });
