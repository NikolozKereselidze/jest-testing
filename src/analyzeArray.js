function analyzeArray(arr) {
  let average = 0;
  let min = arr[0];
  let max = arr[0];
  let length = 0;

  arr.forEach((element, i) => {
    min = min > element ? element : min;
    max = max < element ? element : max;
    length = i + 1;
    average += element;
  });
  average /= length;
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
