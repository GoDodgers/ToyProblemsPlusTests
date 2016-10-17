/*
Array Middle
Given an array of negative/positive integers, return the element in the center position of the array.

If the array has an even number of elements, return the average of the two middle elements instead.

Examples
Input								Output

numbers:
[ 200, 5, 100 ]						5

numbers:
[ 10, 20, 30, 40 ]					25

*/

function middle (numbers) {
  if (numbers.length % 2 == 0) {
  	return (numbers[(numbers.length / 2) - 1] + numbers[(numbers.length / 2)]) / 2;
  }
  return numbers[Math.floor(numbers.length / 2)]
}
