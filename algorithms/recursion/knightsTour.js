/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const knightsTour = function (m, n, r, c) {
	// Start time
	const startTime = new Date();

	const MOVES = [
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[-2, -1],
		[-2, 1],
		[2, -1],
		[2, 1],
	];

	const backtrack = (row, column, moveCount) => {
		if (moveCount === m * n) {
			return true;
		}

		const sortedMoves = getNextMoves(row, column);

		for (const [newRow, newColumn] of sortedMoves) {
			if (isValidMove(newRow, newColumn)) {
				board[newRow][newColumn] = moveCount;

				if (backtrack(newRow, newColumn, moveCount + 1)) {
					return true;
				}

				board[newRow][newColumn] = -1;
			}
		}

		return false;
	};

	const getNextMoves = (row, column) => {
		const nextMoves = [];

		for (const [dRow, dColumn] of MOVES) {
			const [newRow, newColumn] = [row + dRow, column + dColumn];
			const accessibleMoves = countAccessibleMoves(newRow, newColumn);
			nextMoves.push([[newRow, newColumn], accessibleMoves]);
		}

		return nextMoves.sort((a, b) => a[1] - b[1]).map(([moveSet, _]) => moveSet);
	};

	const countAccessibleMoves = (row, column) => {
		let validCount = 0;
		for (const [dRow, dColumn] of MOVES) {
			const [newRow, newColumn] = [row + dRow, column + dColumn];
			if (isValidMove(newRow, newColumn)) validCount++;
		}
		return validCount;
	};

	const isValidMove = (row, column) =>
		row >= 0 &&
		row < m &&
		column >= 0 &&
		column < n &&
		board[row][column] == -1;

	const board = new Array(m).fill().map(() => new Array(n).fill(-1));
	board[r][c] = 0;

	backtrack(r, c, 1);

	// Return how much time it took to complete the tour
	const endTime = new Date();
	const timeTaken = endTime - startTime;
	console.log(`Time taken: ${timeTaken} ms`);

	return board;
};

console.log(knightsTour(50, 50, 0, 0));
