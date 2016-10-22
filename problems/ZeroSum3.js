
/**
Zero Sum 3
Given an array of negative/positive integers, return true if there exists three numbers whose sum is zero.

Examples
Input											Output
numbers:
[ 1, 3, 2, -3 ]									true
numbers:
[ 0, 2, -2 ]									true
numbers:
[ 5, 7, 2, 9 ]									false
numbers:
[ 1, 1 ]										false
numbers:
[ 6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5,		true
-7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1 ]			
 */

function zeroSum3 (numbers) {
	var sum = numbers.reduce((a, b) => a + b, 0);
	if (numbers.length < 3) {
		return false;
	} else if (numbers.length == 3 && sum == 0) {
		return true;
	}
	for (var i = 0; i < numbers.length; i++) {
		var num1 = numbers[i];
		for (var j = i+1; j < numbers.length; j++) {
			var num2 = numbers[j];
			for (var k = j+1; k < numbers.length; k++) {
				var num3 = numbers[k];
				if (num1 + num2 + num3 === 0) {
					return true;
				}
			}
		}
	} 
	return false;
}
