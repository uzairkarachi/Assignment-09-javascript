// Find the Missing Number in a Series :
// 1. Create an array of numbers representing a series (like 1 to 10) with one number missing.
// 2. The task is to find out which number is missing.
// create new serries of array missing one number and found this number in the array
var series = [1, 2, 3,4, 5, 6, 7, 9, 10];
var missingNumber = null;
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing number in the series:", missingNumber);

// create new serries of array missing some number and found this number in the array
var series = [1, 2, 3, 4, 5, 6, 7, 8, 10];
var missingNumber = [];
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing numbers in the series:", missingNumber);