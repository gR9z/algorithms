/**
 * Binary Search Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(log n). This occurs because the algorithm divides the search interval in half with each step.
 * - Average case: O(log n). Since the search space is halved each time, the time complexity remains logarithmic.
 * - Best case: O(1). This happens when the target element is located at the midpoint of the array on the first try.
 *
 * Space Complexity:
 * - O(1). Binary search is an in-place algorithm as it requires a constant amount of space regardless of the input size.
 *
 * Binary search is an efficient algorithm for finding a specific element in a sorted array. It works by repeatedly dividing in half the portion of the list that could contain the item, until narrowing down the possible locations to just one.
 *
 * The algorithm works by initially considering the entire array. It finds the middle element and compares it to the target. If the middle element is equal to the target, the search is over. If the target is less than the middle element, the search continues in the left half of the array. Otherwise, the search moves to the right half. This process continues, halving the size of the remaining portion of the array each time, until the target is found or the array segment being searched becomes empty.
 *
 * The reason for using `Math.floor((start + end) / 2)` to find the midpoint is to ensure that the index is an integer. In JavaScript, array indices must be integers, and this calculation handles cases where `start + end` is an odd number.
 *
 * By constantly dividing the search interval in half, binary search minimizes the number of comparisons needed to find the target element, which is why its time complexity is logarithmic. However, it requires that the input array be sorted, as the entire method relies on being able to discard half of the search space at each step.
 *
 * While binary search is significantly more efficient than linear search methods, especially for large datasets, it is limited by the necessity of having a sorted input array. For unsorted arrays, a linear search would be necessary.
 *
 * @param {number[]} sortedArray The sorted array of numbers in which to search for the target.
 * @param {number} [target] The target element to search for in the array.
 * @returns {number} The index of the target element in the array, or -1 if the element is not found.
 */
const binarySearch = (sortedArray: number[], target?: number): number => {
	let start = 0;
	let end = sortedArray.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (sortedArray[mid] === target) {
			return mid;
		} else if (sortedArray[mid] < target!) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
};

export default binarySearch;
