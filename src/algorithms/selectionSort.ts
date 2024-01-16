/**
 * Selection Sort Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(n²). This occurs because, for each element, the algorithm searches through the rest of the array to find the minimum element.
 * - Average case: O(n²). Regardless of the initial arrangement of the array, the algorithm always performs the same number of comparisons.
 * - Best case: O(n²). Even if the array is already sorted, the algorithm still compares each element to find the minimum in the unsorted part.
 *
 * Space Complexity:
 * - O(1). Selection sort is an in-place sorting algorithm. It requires only a constant amount of additional memory space for its operations.
 *
 * Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. At each step, the algorithm finds the smallest (or largest, depending on sorting order) element in the unsorted sublist and exchanges it with the leftmost unsorted element, moving the sublist boundaries one element to the right.
 *
 * The algorithm works by iterating over the array with two nested loops: the outer loop tracks the position of the first unsorted element, and the inner loop searches for the smallest element in the unsorted part of the array.
 *
 * The reason for using `arr.length - 1` in the outer loop is because on the final pass, the unsorted part will consist of only one element, which is necessarily the largest remaining element and is already in its correct position.
 *
 * Under the hood, the algorithm repeatedly selects the smallest remaining unsorted element and moves it to the end of the sorted portion. This process involves comparing and potentially swapping elements, which is why it has quadratic time complexity.
 *
 * Despite its simplicity, the selection sort algorithm is not efficient for large datasets compared to more advanced algorithms like quicksort or mergesort.
 *
 * @param {number[]} arr The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
const selectionSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length - 1; i++) {
		let smallestIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[smallestIndex]) {
				smallestIndex = j;
			}
		}

		if (smallestIndex !== i) {
			[arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];
		}
	}

	return arr;
};

export default selectionSort;
