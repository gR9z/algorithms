/**
 * MergeSort Algorithm Complexity Analysis
 *
 * Time Complexity:
 * - Worst case: O(n log n). Occurs in all cases because the array is always split into halves and then merged.
 * - Average case: O(n log n). The array is consistently split and merged, making the algorithm very efficient.
 * - Best case: O(n log n). Even in the best scenario, the splitting and merging processes are the same.
 *
 * Space Complexity:
 * - O(n). MergeSort requires additional space to store the temporary left and right arrays, proportional to the size of the input array.
 */

/**
 * Merge function for MergeSort Algorithm
 *
 * This function merges two sorted arrays into a single sorted array. It is a key part of the merge sort algorithm.
 * The merge operation is the heart of the merge sort, enabling the combination of smaller sorted arrays into larger ones.
 *
 * The function iterates over the elements of the left and right arrays, comparing them and adding the smaller of the two to the sorted array. This process continues until all elements from both arrays are added to the sorted array.
 * If one of the arrays is exhausted before the other, the remaining elements of the other array are appended to the sorted array.
 *
 * Time Complexity:
 * - O(n), where n is the total number of elements in the left and right arrays.
 *   Each element from both arrays is visited exactly once.
 *
 * Space Complexity:
 * - O(n), as it requires additional space to store the sorted array.
 *
 * @param {number[]} left The first sorted array.
 * @param {number[]} right The second sorted array.
 * @returns {number[]} The merged and sorted array.
 */
const merge = (left: number[], right: number[]): number[] => {
	let sortedArray = [];

	let li = 0;
	let ri = 0;

	while (li < left.length && ri < right.length) {
		if (left[li] < right[ri]) {
			sortedArray.push(left[li]);
			li++;
		} else {
			sortedArray.push(right[ri]);
			ri++;
		}
	}

	while (li < left.length) {
		sortedArray.push(left[li]);
		li++;
	}

	while (ri < right.length) {
		sortedArray.push(right[ri]);
		ri++;
	}

	return sortedArray;
};

/**
 * MergeSort is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
 * The merge() function is used for merging two halves. The mergeSort() function recursively divides the array into halves until the base case of a single element (or empty) array is reached.
 *
 * The algorithm works by dividing the array into smaller subarrays until each subarray has one or zero elements.
 *
 * Subarrays of one or zero elements are trivially sorted. It then merges these sorted subarrays to produce larger sorted subarrays, continuing this process until the entire array is sorted.
 *
 * Under the hood, mergeSort recursively divides the array, and on each level of recursion, it involves a merge operation that takes linear time relative to the number of elements being merged.
 * This results in a logarithmic number of levels (as the array is halved at each level), leading to the O(n log n) time complexity.
 * This algorithm is notable for its efficiency with large datasets and its ability to sort data with minimal memory usage, as it only requires additional memory for temporary array storage during merging.
 *
 * @param {number[]} arr The array to sort.
 * @returns {number[]} The sorted array.
 */
const mergeSort = (arr: number[]): number[] => {
	// Base case
	if (arr.length <= 1) return arr;

	const mid = arr.length >> 1;

	// Recursive calls
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
};

export default mergeSort;
