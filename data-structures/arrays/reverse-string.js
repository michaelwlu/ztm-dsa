function reverse(str) {
	if (!str) {
		throw new Exception("Empty string input");
	}

	let result = "";

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}

	return result;
}

console.log(reverse("Hello!"));
