function Star() {
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.init = function () {
    this.x = random(-windowWidth, windowWidth);
    this.y = random(-windowHeight, windowHeight);
    this.z = random(windowWidth);
  }

  this.update = function () {
    this.z = this.z - 10;

    if (this.z < 1) {
      this.z = windowWidth;
      this.x = random(-windowWidth, windowWidth);
      this.y = random(-windowHeight, windowHeight);
    }
  }

  this.show = function () {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, windowWidth);
    var sy = map(this.y / this.z, 0, 1, 0, windowHeight);

    ellipse(sx, sy, 8, 8);
  }
}