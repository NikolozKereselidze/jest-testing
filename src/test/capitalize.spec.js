const capitalize = require("../capitalize");

test("return first letter capitalized", () => {
  expect(capitalize("gela gnolidze")).toBe("Gela gnolidze");
});
