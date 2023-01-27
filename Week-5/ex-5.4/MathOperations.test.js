const math = require("./MathOperations");

//test sum
test("1. Test Sum: ", () => {
  expect(math.sum(10, 20)).toBe(30);
});

//test diff
test("2. Test Diff: ", () => {
  expect(math.diff(20, 10)).toBe(10);
});

//test product
test("3. Test Product: ", () => {
  expect(math.product(10, 20)).toBe(200);
});
