function reverseString(str) {
	let result = "";
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
	if (str.length === 1) {
		return str;
	}

	return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

console.log(reverseStringRecursive("yoyo master"));
