/**
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Examples
Input											Output
numbers:
[ 1, 3, 2, -3 ]									true
numbers:
[ 5, 7, 2, 9 ]									false
*/


function zeroSum (numbers) {
	if (numbers.length <= 1) {
		return false;
	}
	for (var i = 0; i < numbers.length; i++) {
		var num1 = numbers[i];
		for (var j = i+1; j < numbers.length; j++) {
			var num2 = numbers[j];
			if (num1 + num2 === 0) {
				return true;
			}
		}
	} 
	return false;
}
