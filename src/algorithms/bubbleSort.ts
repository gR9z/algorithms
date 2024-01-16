/**
 * Bubble Sort Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(n²). Occurs when the array is in reverse order, requiring every element to be compared and swapped in each pass.
 * - Average case: O(n²). For a randomly arranged array, the number of comparisons remains high, but some swaps might be saved.
 * - Best case: O(n). Occurs when the array is already sorted, but the algorithm still makes one full pass without any swaps.
 *
 * Space Complexity:
 * - O(1). Bubble sort is an in-place sorting algorithm. It only requires a constant amount of additional memory space for its operations.
 *
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
 *
 * The algorithm works by iterating from the beginning to the end of the array multiple times. On each iteration, it compares each pair of adjacent items and swaps them if they are in the wrong order. This process is repeated until no swaps are needed, which means the array is sorted.
 *
 * The reason for using `arr.length - 1` in the inner loop is to avoid comparing the last element with an undefined next element. Since the inner loop already compares each pair of elements, there is no need to include the last element in the comparison, as it has no adjacent element after it.
 *
 * This algorithm demonstrates a straightforward implementation of sorting with a trade-off in efficiency, particularly noticeable when dealing with large data sets.
 *
 * @param {number[]} arr The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
const bubbleSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

export default bubbleSort;
