/**
 * Bubble Sort Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(n²). This occurs when the array is in reverse order, requiring each element to be compared and swapped until the entire array is sorted.
 * - Average case: O(n²). Since it compares each pair of adjacent items, the total number of comparisons is roughly the same regardless of the initial order of the array.
 * - Best case: O(n). If the array is already sorted, the algorithm can be optimized to detect this with a flag and stop early, making the time complexity linear.
 *
 * Space Complexity:
 * - O(1). Bubble sort is an in-place sorting algorithm. It requires a small, constant amount of additional space for swapping elements, making it space efficient.
 *
 * Bubble sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list (beginning of the array) with each iteration.
 *
 * The algorithm works by iterating over the array with two nested loops: the outer loop tracks the progress of the sorting and ensures that each element is compared, and the inner loop performs the actual comparisons and swaps between adjacent elements. After each pass of the outer loop, the largest unsorted element is placed in its correct position, reducing the range of the next pass by one.
 *
 * The use of `arr.length - 1 - i` in the inner loop's condition optimizes the algorithm by reducing the number of comparisons in each subsequent pass. Since the i-th largest element is correctly placed at the end after the i-th pass, there is no need to compare it again.
 *
 * Despite its simplicity, bubble sort is not suitable for large datasets due to its quadratic time complexity. However, it has educational value in teaching the concept of sorting and algorithms in general. It is also useful for small datasets or datasets that are almost sorted.
 *
 * @param {number[]} arr The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
const bubbleSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

export default bubbleSort;
