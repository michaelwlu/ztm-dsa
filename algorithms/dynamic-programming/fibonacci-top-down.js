function findFibonacciTopDown(n, cache = {}) {
	if (n in cache) {
		return cache[n];
	}

	if (n < 2) {
		return n;
	}

	cache[n] = findFibonacciTopDown(n - 1) + findFibonacciTopDown(n - 2);
	return cache[n];
}

console.log(findFibonacciTopDown(10));
// 0, 1, 1, 2, 3, 5, 8
