/**
 * Linear Search Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(n*m). This occurs when each element of the first array (n) is compared against all elements in the randomized array (m).
 * - Average case: O(n*m). As each element in the first array is compared with every element in the randomized array, the total number of comparisons remains consistent.
 * - Best case: O(n*m). Even if matches are found early for some elements, the algorithm still compares each element of the first array with every element in the randomized array.
 *
 * Space Complexity:
 * - O(n). While the linear search itself is in-place and only requires a constant amount of additional space, the storing of counting results in 'matchingCount' object scales with the size of the input array.
 *
 * The linear search algorithm operates by iterating over each element in the input array and comparing it against each element in a randomized array. The objective is to count the occurrences of each element from the input array within this randomized array.
 *
 * The algorithm is implemented using two nested loops: the outer loop iterates over the input array, while the inner loop iterates over the randomized array for each element of the input array. If a match is found (the element from the input array is equal to an element in the randomized array), a count for that element is incremented in the 'matchingCount' object.
 *
 * This method of searching and counting is straightforward but not the most efficient, especially with large datasets. The use of nested loops leads to a quadratic time complexity, making it less suitable for scenarios where either of the arrays is considerably large.
 *
 * Additionally, the creation of a randomized array adds a level of unpredictability to the occurrences count, which can be useful in scenarios like simulations or when analyzing the distribution of elements.
 *
 * The linear search and counting algorithm is simple and effective for smaller datasets or where the performance is not a critical concern. However, for larger datasets or performance-critical applications, more efficient algorithms should be considered.
 *
 * @param {string[]} array The array of strings to be searched and counted.
 * @returns {string[]} An array of strings representing the count of each element in the format "element: count occ".
 */
const createRandomizedArray = (array: string[]): string[] => {
	const arrayToSearch: string[] = [];

	for (let i = 0; i < 50; i++) {
		const randomId = Math.floor(Math.random() * array.length);
		arrayToSearch.push(array[randomId]);
	}
	return arrayToSearch;
};

const linearSearch = (array: string[]): string[] => {
	const randomizedSelection = createRandomizedArray(array);

	const matchingCount: { [key: string]: number } = {};

	for (const element of array) {
		matchingCount[element] = 0;
		for (const randomElement of randomizedSelection) {
			if (element === randomElement) {
				matchingCount[element]++;
			}
		}
	}

	console.log('Randomized Array: ', randomizedSelection);
	const results = Object.entries(matchingCount).map(
		([name, count]) => `${name}: ${count} occ`
	);

	return results;
};
export default linearSearch;
