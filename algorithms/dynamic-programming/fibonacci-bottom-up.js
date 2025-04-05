function findFibonacciBottomUp(n) {
	if (n < 2) return n;

	let fibNums = [0, 1];

	for (let i = 2; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

console.log(findFibonacciBottomUp(10));
