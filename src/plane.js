function Plane() {
  this.landed = true;
}

Plane.prototype.fly = function () {
  this.landed = false;
};

Plane.prototype.land = function() {
  this.landed = true;
}
