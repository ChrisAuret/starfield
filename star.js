function Star() {
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.pz = 0;

  this.init = function () {
    this.x = random(-windowWidth, windowWidth);
    this.y = random(-windowHeight, windowHeight);
    this.z = random(windowWidth);
    this.pz = this.z;
  }

  this.update = function () {
    this.z = this.z - speed;

    if (this.z < 1) {
      this.z = windowWidth;
      this.x = random(-windowWidth, windowWidth);
      this.y = random(-windowHeight, windowHeight);
      this.pz = this.z;
    }
  }

  this.show = function () {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, windowWidth);
    var sy = map(this.y / this.z, 0, 1, 0, windowHeight);

    var r = map(this.z, 0, windowWidth, 16, 0);

    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, windowWidth);
    var py = map(this.y / this.pz, 0, 1, 0, windowHeight);

    stroke(255);
    line(px, py, sx, sy);
  }
}