// //oval FUNCTION
// function setup() {
//   createCanvas(500,500);
//   background(0);
//   oval(250,250,400,200);
// }
//
// function oval(x,y,w,h) {
//   ellipse(x,y,w,h);
// }

//oval FUNCTION w/ default params
function setup() {
  createCanvas(500,500);
  background(0);
  oval();
  oval(50,350);
  fill(0);
  oval(undefined,undefined,10,10);
}

function oval(x = 250,y = 250,w = 100,h = 100) {
  ellipse(x,y,w,h);
}
