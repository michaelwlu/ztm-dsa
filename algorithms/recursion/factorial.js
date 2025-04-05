function findFactorialRecursive(num) {
	if (num === 1) {
		return 1;
	}

	return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
	let result = 1;

	for (let i = num; i > 0; i--) {
		result *= i;
	}

	return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
