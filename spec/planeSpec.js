describe("Plane", function() {
  // var plane;

  beforeEach(function () {
    plane = new Plane();
  });

  describe("status", function() {
    it("is landed", function() {
      plane.land();
      expect(plane.landed).toBe(true);
    });

    it("is flying", function() {
      plane.fly();
      expect(plane.landed).toBe(false);
    });
  });
});
