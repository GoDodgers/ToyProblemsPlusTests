/*
Robot Paths
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)

Examples

Input							Output

n:
1								1

n:
2								2

n:
3								12

*/

function robotPaths (n) {
	var count = 0;
	var board = makeBoard(n);

	function findPaths(x, y) {
		if (x == n - 1 && y == n - 1) {
			count ++;
			return;
		} else if (x < 0 ||y < 0 || x >= n || y >= n || board[x][y]) {
			return;
		}

		board.togglePiece(x, y);
		findPaths(x+1, y);
		findPaths(x-1, y);
		findPaths(x, y+1);
		findPaths(x, y-1);
		board.togglePiece(x, y);
	}

	findPaths(0, 0)
	return count;
}


function makeBoard(n) {
	var board = [];
	for (var i = 0; i < n; i++) {
		board.push([]);
		for (var j = 0; j < n; j++) {
			board[i].push(false);
		}
	}
	board.togglePiece = function(i, j) {
		this[i][j] = !this[i][j];
	}
	board.hasBeenVisited = function(i, j) {
		return !!this[i][j];
	}
	return board;
}
