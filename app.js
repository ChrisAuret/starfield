
var stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 100; i++) {
    var star = new Star();
    star.init();
    stars.push(star);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (var i = 0; i < 100; i++) {
    stars[i].update();
    stars[i].show();
  }
}