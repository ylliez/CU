/**
Sandbox 04 - Tunnel
illiez
*/

"use strict";

let frames = { size: 1, factor: 1 };
let origin = { x: 0, y: 0 };
let focal = { x: 0, y: 0 };

function setup() {
  createCanvas(windowWidth,windowHeight);
  // frame1 = createFrame(windowWidth/4,windowWidth/4);
  // frame2 = createFrame(windowWidth/2,windowWidth/2);
  // frame3 = createFrame(windowWidth/2+windowWidth/4,windowWidth/2+windowWidth/4);
  origin.x = windowWidth/2;
  origin.y = windowHeight/2;
}

// function createFrame(r, g, b) {
//   let frame = { x: 0, y: 0, size: 0, r: r, g: g, b: b };
//   return frame;
// }

function draw() {
  background(0);
  translate(origin.x,origin.y);
  focal.x = mouseX-windowWidth/2;
  focal.y = mouseY-windowHeight/2;
  rectMode(CENTER);
  noFill(0);
  stroke(255);

//   rect(0, 0, (frames.factor * windowWidth) / 4096, (frames.factor * windowHeight) / 4096);
//   stroke(127);
//   rect(0, 0, (frames.factor * windowWidth) / 8192, (frames.factor * windowHeight) / 8192
// );
//   rect(0, 0, (frames.factor * windowWidth) / 2048, (frames.factor * windowHeight) / 2048);
//   rect(0, 0, (frames.factor * windowWidth) / 1024, (frames.factor * windowHeight) / 1024);
//   rect(0, 0, (frames.factor * windowWidth) / 512, (frames.factor * windowHeight) / 512);

// for (let i = 0; i < 10; i++) {
//   rect(0,0,frames.factor * windowWidth / 8192,frames.factor * windowHeight / 8192);
//   frames.factor += 1;
//  }

  frames.size = 1;
  frames.factor += 0.1;
//  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      rect(focal.x,focal.y,frames.factor * windowWidth / frames.size,frames.factor * windowHeight / frames.size);
      frames.size *= 2;
     }
   //   frames.factor += 10;
   // }



stroke(255);
strokeWeight(1);
  line(focal.x,focal.y,0,-windowHeight/2);
  line(focal.x,focal.y,windowWidth/8,-windowHeight/2);
  line(focal.x,focal.y,windowWidth/4,-windowHeight/2);
  line(focal.x,focal.y,windowWidth/4+windowWidth/8,-windowHeight/2);
  line(focal.x,focal.y,windowWidth/2,-windowHeight/2);
  line(focal.x,focal.y,windowWidth/2,-windowHeight/3);
  //line(focal.x,focal.y,windowWidth/2,-windowHeight/4-windowHeight/8);
  line(focal.x,focal.y,windowWidth/2,-windowHeight/6);
  line(focal.x,focal.y,windowWidth/2,0);
  line(focal.x,focal.y,windowWidth/2,windowHeight/6);
  //line(focal.x,focal.y,windowWidth/2,windowHeight/4+windowHeight/8);
  line(focal.x,focal.y,windowWidth/2,windowHeight/3);
  line(focal.x,focal.y,windowWidth/2,windowHeight/2);
  line(focal.x,focal.y,windowWidth/4+windowWidth/8,windowHeight/2);
  line(focal.x,focal.y,windowWidth/4,windowHeight/2);
  line(focal.x,focal.y,windowWidth/8,windowHeight/2);

  line(focal.x,focal.y,0,windowHeight/2);
  line(focal.x,focal.y,-windowWidth/8,-windowHeight/2);
  line(focal.x,focal.y,-windowWidth/4,-windowHeight/2);
  line(focal.x,focal.y,-windowWidth/4-windowWidth/8,-windowHeight/2)
  line(focal.x,focal.y,-windowWidth/2,-windowHeight/2);
  line(focal.x,focal.y,-windowWidth/2,-windowHeight/3);
//  line(focal.x,focal.y,-windowWidth/2,-windowHeight/4-windowHeight/8);
  line(focal.x,focal.y,-windowWidth/2,-windowHeight/6);
  line(focal.x,focal.y,-windowWidth/2,0);
  line(focal.x,focal.y,-windowWidth/2,windowHeight/6);
  //line(focal.x,focal.y,-windowWidth/2,windowHeight/4+windowHeight/8);
  line(focal.x,focal.y,-windowWidth/2,windowHeight/3);
  line(focal.x,focal.y,-windowWidth/2,windowHeight/2);
  line(focal.x,focal.y,-windowWidth/4-windowWidth/8,windowHeight/2);
  line(focal.x,focal.y,-windowWidth/4,windowHeight/2);
  line(focal.x,focal.y,-windowWidth/8,windowHeight/2);
}

/*
line(0,0,0,-windowHeight/2);
line(0,0,windowWidth/8,-windowHeight/2);
line(0,0,windowWidth/4,-windowHeight/2);
line(0,0,windowWidth/4+windowWidth/8,-windowHeight/2);
line(0,0,windowWidth/2,-windowHeight/2);
line(0,0,windowWidth/2,-windowHeight/3);
//line(0,0,windowWidth/2,-windowHeight/4-windowHeight/8);
line(0,0,windowWidth/2,-windowHeight/6);
line(0,0,windowWidth/2,0);
line(0,0,windowWidth/2,windowHeight/6);
//line(0,0,windowWidth/2,windowHeight/4+windowHeight/8);
line(0,0,windowWidth/2,windowHeight/3);
line(0,0,windowWidth/2,windowHeight/2);
line(0,0,windowWidth/4+windowWidth/8,windowHeight/2);
line(0,0,windowWidth/4,windowHeight/2);
line(0,0,windowWidth/8,windowHeight/2);

line(0,0,0,windowHeight/2);
line(0,0,-windowWidth/8,-windowHeight/2);
line(0,0,-windowWidth/4,-windowHeight/2);
line(0,0,-windowWidth/4-windowWidth/8,-windowHeight/2)
line(0,0,-windowWidth/2,-windowHeight/2);
line(0,0,-windowWidth/2,-windowHeight/3);
//  line(0,0,-windowWidth/2,-windowHeight/4-windowHeight/8);
line(0,0,-windowWidth/2,-windowHeight/6);
line(0,0,-windowWidth/2,0);
line(0,0,-windowWidth/2,windowHeight/6);
//line(0,0,-windowWidth/2,windowHeight/4+windowHeight/8);
line(0,0,-windowWidth/2,windowHeight/3);
line(0,0,-windowWidth/2,windowHeight/2);
line(0,0,-windowWidth/4-windowWidth/8,windowHeight/2);
line(0,0,-windowWidth/4,windowHeight/2);
line(0,0,-windowWidth/8,windowHeight/2);
}
*/
