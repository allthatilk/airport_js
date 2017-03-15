function Airport() {
  this.runways = [];
};

Airport.prototype.landingPermission = function(plane) {
    if (this.runways.length === 10)
      console.log("Airport is full");
    else {
      plane.land();
      this.runways.push(plane);
    };
};



// var airport = new Airport();
