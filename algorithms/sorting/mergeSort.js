function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	// Split Array in into right and left
	const midpoint = Math.floor(array.length / 2);
	const left = array.slice(0, midpoint);
	const right = array.slice(midpoint);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const merged = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Merge elements in order until one array is exhausted
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] <= right[rightIndex]) {
			merged.push(left[leftIndex]);
			leftIndex++;
		} else {
			merged.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// Concatenate any remaining elements
	return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const answer = mergeSort(numbers);
console.log(answer);
