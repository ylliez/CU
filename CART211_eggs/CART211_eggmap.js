let coordX = 0;
let coordY = 0;
let mapX = 0;
let mapY = 0;
let mapCoord = "";

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

function genMap() {
  coordX = Math.random()*180-90; //*360-180
  coordY = Math.random()*180-90;
  mapX = coordX.toFixed(7);
  mapY = coordY.toFixed(7)
  console.log(mapX);
  console.log(mapY);
  mapCoord = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d121224.03306142737!2d"+mapX+"!3d"+mapY+"!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1636240704046!5m2!1sen!2sca";
  // document.getElementById('mapFrame').src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1212.2403306142737!2d-73.5736802!3d45.5141545!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1636240704046!5m2!1sen!2sca";
  // document.getElementById('mapFrame').src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1212.2403306142737!2d-80.8987082!3d50.5833683!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1636240704046!5m2!1sen!2sca";
  // document.getElementById('mapFrame').src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1212.2403306142737!2d"+mapX+"!3d"+mapY+"!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1636240704046!5m2!1sen!2sca";
  document.getElementById('mapFrame').src = mapCoord;

  // console.log(document.getElementById('mapFrame').src);
  console.log(mapCoord);


// bounds: https://stackoverflow.com/questions/11849636/maximum-lat-and-long-bounds-for-the-world-google-maps-api-latlngbounds

}
