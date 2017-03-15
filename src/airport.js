function Airport() {
  this.runways = [];
};

Airport.prototype.landingPermission = function(plane) {
  plane.land();
  this.runways.push(plane);
};

var airport = new Airport();
