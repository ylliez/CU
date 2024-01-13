let weather;

function preload() {
  //CORS issue
  // weather = loadJSON(`https://www.metaweather.com/api/location/3534`);
  weather = loadJSON(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/3534`);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  let forecast = weather.consolidated_weather[0].weather_state_name;

  push();
  textAlign(CENTER);
  textSize(64);
  fill(255,255,0);
  text(forecast, width/2, height/2);
  pop();
}
