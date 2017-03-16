describe("Airport", function() {

  beforeEach(function () {
    plane = new Plane()
    airport = new Airport()
  })

  describe("status", function() {
    it("contains plane", function() {
      airport.landingPermission(plane)
      expect(airport.runways.indexOf(plane)).toEqual(0)
    })

    it("has a maximum capacity", function() {
      for (let i = 0; i < 10; i++) {
        airport.landingPermission(new Plane())
      }

      const boeing = new Plane()
      expect(airport.landingPermission(boeing)).
        toEqual('Airport is full')
    })
  })
})
