/*
Palindrome
Given a string, return true if it’s a palindrome, and false otherwise. Only consider alphabet characters as part of the word.

Examples
Input									Output

str:
"kayak"									true

str:
"race car"								true

str:
"Civic"									true

str:
"Honda"									false
*/

function isPalindrome(string) {
	var regEX = /[\s_]/ig;
	var newString = string.toLowerCase().replace(regEX, "");
	var reverseString = newString.split("").reverse().join("");
	return newString === reverseString;
}

