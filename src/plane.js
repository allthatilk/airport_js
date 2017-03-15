function Plane() {
  this.landed = false;
};

Plane.prototype.fly = function () {
  this.landed = false;
};

Plane.prototype.land = function() {
  this.landed = true;
};

var plane = new Plane();

airport.landingPermission(plane);
