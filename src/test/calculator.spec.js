const calculator = require("../calculator");

describe("math operations", () => {
  test("add two numbers", () => {
    expect(calculator.add(5, 10)).toBe(15);
  });
  test("substract two numbers", () => {
    expect(calculator.substract(15, 5)).toBe(10);
  });
  test("divide two numbers", () => {
    expect(calculator.divide(20, 2)).toBe(10);
  });
  test("multiply two numbers", () => {
    expect(calculator.multiply(5, 10)).toBe(50);
  });
});
