function mergeSortedArrays(arr1, arr2) {
	let result = [];
	let i1 = 0;
	let i2 = 0;

	while (i1 < arr1.length || i2 < arr2.length) {
		const curr1 = arr1[i1];
		const curr2 = arr2[i2];

		if (curr1 < curr2 || i2 >= arr2.length) {
			result.push(curr1);
			i1++;
		} else {
			result.push(curr2);
			i2++;
		}
	}

	return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
