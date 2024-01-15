const partition = (arr: number[], low: number, high: number): number => {
	const pivot = arr[high];

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

	return i + 1;
};

const quickSort = (arr: number[], low: number, high: number): void => {
	if (low < high) {
		let pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
};

export default quickSort;
