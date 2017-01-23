function Star() {
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.init = function () {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.z = random(0, windowWidth);
  }

  this.update = function () {

  }

  this.show = function () {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, windowWidth);
    var sy = map(this.y / this.z, 0, 1, 0, windowHeight);

    ellipse(sx, sy, 8, 8);
  }
}