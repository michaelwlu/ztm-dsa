function insertionSort(arr) {
	// iterate starting from second element, which is considered the first unsorted element
	for (let i = 1; i < arr.length; i++) {
		// assign the unsorted element to a temporary variable
		let current = arr[i];

		// start with the preceding element
		let j = i - 1;

		// before reaching the beginning of the array and while the iterator element is larger than the unsorted element
		while (j >= 0 && arr[j] > current) {
			// shift that element to the right
			arr[j + 1] = arr[j];
			j--;
		}

		// loop ends when the iterator element is smaller than the unsorted element
		// insert the unsorted element to the immediate right
		arr[j + 1] = current;
	}

	return arr;
}

console.log(insertionSort([1, 200, 45, 3234, 399, 2, 44, 3, 700, 50]));
