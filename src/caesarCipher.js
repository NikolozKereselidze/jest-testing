const caesarCipher = function (input, shift) {
  shift = shift % 26;

  function shiftChar(char, shift) {
    const isUpperCase = char >= "A" && char <= "Z";
    const isLowerCase = char >= "a" && char <= "z";

    if (!isUpperCase && !isLowerCase) {
      return char;
    }

    const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const newCharCode = ((char.charCodeAt(0) - base + shift) % 26) + base;

    return String.fromCharCode(newCharCode);
  }

  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += shiftChar(input[i], shift);
  }
  return result;
};

module.exports = caesarCipher;
