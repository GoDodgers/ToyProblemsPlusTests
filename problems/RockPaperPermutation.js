/*

Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

Examples

Input										Output

roundCount:
1											[ "r", "p", "s" ]

roundCount:
2											[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

roundCount:
0											[ ]

*/

function rockPaperPermutation (roundCount) {
	const rps = "rps";
	const results = [];
	const temp = [];

	function findCombos(n) {
		for (var i = 0; i < rps.length; i++) {
			temp.push(rps[i]);
		if (n == 1) {
			results.push(temp.join(""));
		} else {
			findCombos(n - 1);
		}
			temp.pop();
		}
	}

	if (roundCount) { 
		findCombos(roundCount);
	}
	return results;
}
