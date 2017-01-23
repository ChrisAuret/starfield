var stars = [];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 800; i++) {
    var star = new Star();
    star.init();
    stars.push(star);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  speed = map(mouseX, 0, windowWidth, 0, 60);
  background(0);
  translate(windowWidth / 2, windowHeight / 2);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}