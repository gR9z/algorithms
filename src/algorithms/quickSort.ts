/**
 * QuickSort Algorithm Complexity Analysis
 *
 * Time Complexity:
 * - Worst case: O(n²). Occurs with consistently unbalanced partitions. For example, when the pivot is always the greatest or smallest element. This leads to a quadratic time complexity.
 * - Average case: O(n log n). Expected for most inputs. Achieved with random or median pivot selections. Balanced partitions make sorting more efficient.
 * - Best case: O(n log n). Happens with optimal pivot selection, like the true median. Ensures perfectly balanced partitions. Minimizes sorting operations.
 *
 * Space Complexity:
 * - Worst case: O(n). Arises with highly unbalanced partitions. The call stack depth grows linearly with the number of elements.
 * - Average case: O(log n). Achieved with random or median-of-three pivots. Leads to balanced partitioning. Results in logarithmic call stack depth.
 * - Best case: O(log n). Similar to average case. Balanced partitions throughout the process. Optimizes memory usage with logarithmic stack depth growth.
 */

/**
 * Partition function for QuickSort.
 * Key in QuickSort. It selects a pivot.
 * The function rearranges the array around this pivot.
 * The pivot is usually the last element of the segment.
 * It then places the pivot in its correct sorted position.
 * Smaller elements are moved to the left of the pivot, larger ones to the right.
 * This correctly positions each pivot.
 * The process leads to a sorted array over multiple recursive calls.
 * The function returns the index of the pivot after partitioning.
 *
 * The return of 'i + 1' is crucial. It indicates the final position of the pivot.
 * This position is where the pivot is correctly placed in the sorted array.
 * It also defines the division point for further recursive calls.
 * The array is divided into two segments: one before and one after this index.
 * 'Low' and 'high' define these segments. 'Low' is the start, 'high' the end.
 * They set the current scope of the array to be partitioned and sorted.
 *
 * Under the hood, each call to this function partitions a segment of the array.
 * QuickSort works recursively. It first calls partition for a segment.
 * The pivot index, 'i + 1', determines the division point.
 * QuickSort then recursively calls itself for left and right segments of this point.
 * This creates a chain of recursive calls, each acting on a smaller segment.
 * The call stack, which follows a LIFO (Last In, First Out) order, keeps track of these calls.
 * Each new call is placed on top of the stack and is the first to be completed.
 * As calls complete, the stack unwinds, moving back through previous segments.
 * This LIFO process ensures that the most recent call is completed first.
 * Recursion continues until base cases are reached (segments of size 1).
 * QuickSort's efficiency depends on this partitioning, recursive process, and call stack management.
 */
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

/**
 * The main function that implements QuickSort algorithm.
 * QuickSort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays.
 * A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot,
 * based on which the partition is made and another array holds values greater than the pivot value.
 *
 * QuickSort partitions an array and then calls itself recursively twice to sort the two resulting subarrays.
 * This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are of O(n log n) and O(n²), respectively.
 *
 * arr[] --> Array to be sorted,
 * low --> Starting index of the array segment to be sorted,
 * high --> Ending index of the array segment to be sorted.
 *
 * The function works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
 * according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.
 *
 * @param {number[]} arr The array to sort.
 * @param {number} low The starting index of the segment of the array to be sorted.
 * @param {number} high The ending index of the segment of the array to be sorted.
 */
const quickSort = (arr: number[], low: number, high: number): void => {
	if (low < high) {
		// pi is partitioning index, arr[pi] is now at right place
		let pi = partition(arr, low, high);

		// Recursively sort elements before partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
};

export default quickSort;
