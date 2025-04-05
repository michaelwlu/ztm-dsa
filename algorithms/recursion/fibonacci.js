function findFibonacciRecursive(n) {
	if (n < 2) {
		return n;
	}

	return findFibonacciRecursive(n - 1) + findFibonacciRecursive(n - 2);
}

function findFibonacciIterative(n) {
	let arr = [0, 1];

	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n];
}

console.log(findFibonacciRecursive(5));
console.log(findFibonacciIterative(5));
