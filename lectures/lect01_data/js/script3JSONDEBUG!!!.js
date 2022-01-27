


let image;

function preload() {
  image = loadJSON(`https://imsea.herokuapp.com/api/1?q=google%20chrome`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  image(image,0,0);

}
