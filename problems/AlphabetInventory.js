/*

Alphabet Inventory
Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

Examples
Input									Output

alphabet:
	"aBc"
text:
	"aabbccdd"							"a:2,b:2,c:2"

alphabet:
	"x"
text:
	"Racer X is my friend :)"			"x:1"
	
alphabet:
	"123"
text:
	"o hai"								"no matches"

*/


function alphaCount (alphabet, text) {
	alphabet = alphabet.toLowerCase();
	text = text.toLowerCase();
	var alphabetCount = {};
	alphabet = "[" + alphabet + "]";
	var regEx = new RegExp(alphabet, "gi");
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i).match(regEx)) {
			alphabetCount[text.charAt(i)] = (alphabetCount[text.charAt(i)] || 0) + 1;
		}
	}

	if (Object.keys(alphabetCount).length == 0) {
		return "no matches";
	}
	var output = "";
	for (var i = 0; i < alphabet.length; i++) {
		if (alphabetCount[alphabet.charAt(i)]) {
			output += alphabet.charAt(i) + ":" + alphabetCount[alphabet.charAt(i)] + ",";
		}
	}
	return output.slice(0, output.length - 1);
}