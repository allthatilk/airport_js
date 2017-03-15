describe("Airport", function() {

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
});

  describe("status", function() {
    it("contains plane", function() {
      airport.landingPermission(plane);
      expect(airport.runways.indexOf(plane)).toEqual(0);
    });
    it("has a maximum capacity", function() {
      for(var i = 0; i < 9; i++){
        jet = new Plane;
        airport.landingPermission(jet);
      }
      boeing = new Plane();
      expect(airport.landingPermission(boeing)).toEqual(console.log("Airport is full"));
    }
  )
  });
});
