function capitalize(str) {
  let s = str[0];
  s = s.toUpperCase();
  for (let i = 1; i < str.length; i++) {
    s += str[i];
  }
  return s;
}

module.exports = capitalize;
