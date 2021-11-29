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

function notFade() {
    document.getElementById('notFade').style.color = "#FFFFFF";
}
