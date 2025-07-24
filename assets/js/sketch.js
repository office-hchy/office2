let canvas;
let resolutionX = 3;
let resolutionY = 2;
let dS = 0;
let detailLevel = 1;
let angleY = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("left", "0");
}

function draw() {
  background(0); // dark background

  //ambientLight(255);
  rotateZ(180 - 23.5);
  rotateY(angleY);
  fill(10);
  stroke(100);
  sphere(200, resolutionX * detailLevel, resolutionY * detailLevel);
  //background(30, 0.2);

  angleY += 0.005;
}
function mouseWheel(scroll) {
  if (scroll.delta < 0) {
    dS = max(dS - 0.1, 1);
    detailLevel = floor(dS);
  } else {
    dS = min(dS + 0.1, 8);
    detailLevel = floor(dS);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
