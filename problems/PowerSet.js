/*
Power Set
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets,
including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are
the same. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only
contained one ‘a’. See the result below.

Examples
Input								Output

string:
"a"									[ "", "a" ]
string:
"ab"								[ "", "a", "ab", "b" ]
string:
"horse"								[ "", "e", "eh", "eho", "ehor", "ehors", "ehos",
									  "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos",
									  "er", "ers", "es", "h", "ho", "hor", "hors", "hos",
									  "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
*/

function powerSet (string) {
	var results = [''];
	var stringArray = string.split("").sort();
	stringArray = stringArray.filter((el, i, arr) => i == arr.indexOf(el));
	var temp = [];

	function findCombos(n) {
		for (var i = 0; i < stringArray.length; i++) {
			var current = stringArray[i];
			temp.push(current);
			stringArray.splice(i, 1);
			if (n == stringArray.length) {
				results.push(temp.join("")); 
			} else {
				findCombos(n + 1);
			}
			results.push(current);
			temp.pop();
		}
	}

	if (stringArray.length > 0) {
		findCombos(0);
	}
	return results;
}
