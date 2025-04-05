function selectionSort(arr) {
	// the outer iterator starts with the full length of the array and decreases by one each time on the left side
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;

		// the inner iterator starts inside the outer iterator, one smaller from the left side
		for (let j = i; j < arr.length; j++) {
			// loop through until the smallest element is found
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}

		// swap the first element in the subarray with the smallest element
		if (minIdx !== i) {
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
		}

		// repeat and shorten the window from the left each time
	}

	// the goal of selection sort is to find the smallest element and move it to the left one at a time

	return arr;
}

console.log(selectionSort([1, 200, 45, 3234, 399, 2, 44, 3, 700, 50]));
