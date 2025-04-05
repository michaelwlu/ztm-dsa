function bubbleSort(arr) {
	// the outer iterator starts with the full length of the array and shortens by one on the right each time
	for (let i = arr.length - 1; i >= 0; i--) {
		// the inner iterator starts from zero and goes to the right side of the outer window
		for (let j = 0; j < i; j++) {
			// compare and swap two elements at a time
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}

			// at the end of this loop, the largest element in the subarray will be at the very end
		}

		// the goal of bubble sort is to move the largest elements to the end one at a time
	}

	return arr;
}

console.log(bubbleSort([1, 200, 45, 3234, 399, 2, 44, 3, 700, 50]));
