//// returning values
// function setup() {
//   createCanvas(500,500);
//   let tempF = 100;
//   let tempC = toCelsius(100);
//   console.log(`temp is ${tempF}F & ${tempC}C`);
// }
//
// function toCelsius(fahrenheit) {
//   let result = (fahrenheit - 32) * 5/9;
//   return result;
// }

// //returning extreme case
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0
// }
// 
// function setup() {
//   createCanvas(500, 500)
//   reset();
// }
//
// function draw() {
//   background(0);
//
//   move();
//
//   let offScreen = circleIsOffScreen();
//   if (offScreen) {
//     reset();
//   }
//
//   ellipse(circle.x, circle.y, circle.size);
// }
//
// function circleIsOffScreen() {
//   let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
//   return result;
// }
//
// function move() {
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
// }
//
// function reset() {
//   circle.x = 250;
//   circle.y = 250;
//   circle.vx = random(-10, 10);
//   circle.vy = random(-10, 10);
// }

// return multi-property object
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  // We assign the return value of randomColor() into our color variable
  // so it will have an object with three random color properties
  let color = randomColor();
  fill(color.r, color.g, color.b);
  ellipse(250, 250, 100, 100);
}

function randomColor() {
  let result = {
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255)
  };
  return result;
}
