const tes = require("./rover");
test("Initial test", () => {
    expect(moveRover(1, ["left", 5], 100)).toBe("6");
    //expect(1).toBe(1);
})