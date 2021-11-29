//  let notColor =
//
// function makeWait() {
//    document.getElementById('toFade').innerHTML = "hi";
//    document.getElementById('dynamicVid').src = myVar;
// }
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
      let video = document.getElementById("bushVid");
      video.play();
      break;
    default: break;
  }
}

function resourceFade() {
  // document.getElementById('toFade').innerHTML = "hi";
  // document.getElementById('dynamicVid').src = myVar;
    document.getElementById('resourceFade').style.color = "#FFFFFF";
}

function notFade() {
  // document.getElementById('toFade').innerHTML = "hi";
  // document.getElementById('dynamicVid').src = myVar;
    document.getElementById('notFade').style.color = "#FFFFFF";
}
