describe("Airport", function() {

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
});

  describe("status", function() {
    it("contains plane", function() {
      airport.landingPermission(plane);
      // expect(airport.runways).toContain(plane);
      expect(airport.runways.indexOf(plane)).toEqual(0);
    });
    it("has a maximum capacity", function() {
      for(var i = 0; i < 9; i++){
        jet = new Plane;
        airport.landingPermission(jet);
      }
      expect( function(){ airport.landingPermission(plane); } ).toThrow (new Error("Airport is full"));
    }
  )
  });
});
