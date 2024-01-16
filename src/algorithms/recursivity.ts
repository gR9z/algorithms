/**
 * Recursive Sum Function Analysis
 *
 * Time Complexity:
 * - Worst case: O(n). Occurs when the function iterates over each element in the array once.
 * - Average case: O(n). Typical scenario for most arrays, as each element is processed once.
 * - Best case: O(n). Even in the best scenario, each element must be visited.
 *
 * Space Complexity:
 * - O(n). Due to recursive calls, each call adds a layer to the call stack. The depth of the call stack grows linearly with the number of elements in the array.
 *
 * This function calculates the sum of all elements in an array using a recursive approach.
 * It demonstrates a straightforward application of recursion for array processing.
 *
 * The function works by taking the first element of the array, and then recursively calling itself with the rest of the array.
 * The base case is reached when the array is empty, at which point the function returns 0.
 * This base case is crucial for stopping the recursion and preventing an infinite loop.
 *
 * As the function unwinds from the recursion, each element of the array is added together, resulting in the total sum of the array elements.
 * The recursive nature of the function means that it requires additional space for the call stack, and is efficient in terms of the time complexity for linearly processing each element of the array.
 *
 * @param {number[]} arr The array of numbers to be summed.
 * @returns {number} The total sum of the elements in the array.
 */
const recursiveSum = (arr: number[]): number => {
	if (arr.length === 0) return 0;

	const [first, ...reste] = arr;
	return first + recursiveSum(reste);
};

export default recursiveSum;
