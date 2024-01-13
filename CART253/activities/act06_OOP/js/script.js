/**
PaddleBall
illiez
*/

let gravity = 0.0025;
let paddle;
let balls = [];
let numBalls = 4;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle();

  for (var i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(0, -height);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

}


/**
Description of draw()
*/
function draw() {
  background(125);

  paddle.move();
  paddle.display();

  for (var i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}
