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
  document.getElementById('stopBtn').style.left = posX+"%";
  let posY = Math.random()*100;
  document.getElementById('stopBtn').style.top = posY+"%";
}

function notFade() {
    document.getElementById('notFade').style.color = "#FFFFFF";
}
