function Star() {
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.init = function () {
    this.x = random(0, 800);
    this.y = random(0, 800);
    this.z = random(0, 800);
  }

  this.update = function () {

  }

  this.show = function () {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 8, 8);
  }
}