const caesarCipher = require("../caesarCipher");

describe("caesar cipher function", () => {
  test("xyz", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("HeLLo", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Hello, World!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
