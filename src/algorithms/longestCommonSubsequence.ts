/**
 * Longest Common Subsequence (LCS) Algorithm Analysis
 *
 * Time Complexity:
 * - Worst case: O(m * n), where m and n are the lengths of the input strings s1 and s2, respectively.
 * - Average case: O(m * n).
 * - Best case: O(m * n).
 *
 * Space Complexity:
 * - O(m * n), where m and n are the lengths of the input strings s1 and s2, respectively.
 * The algorithm uses a 2D matrix to store intermediate results, which requires this amount of additional memory.
 *
 * The Longest Common Subsequence (LCS) algorithm finds the longest subsequence that is common to two input strings, s1 and s2.
 * A subsequence is a sequence of characters that appears in the same order in both strings but not necessarily consecutively.
 *
 * The LCS algorithm works by constructing a matrix where the rows and columns represent characters from s1 and s2.
 * Each cell in the matrix stores the length of the LCS up to that point.
 * The algorithm iterates through both strings, comparing characters:
 * - If the characters match, it increments the LCS length by 1 and moves diagonally in the matrix.
 * - If the characters do not match, it selects the maximum LCS length from the adjacent cells (up or left).
 * This process continues until the entire matrix is filled.
 *
 * After building the matrix, the LCS itself is reconstructed by backtracking through the matrix.
 * Starting from the bottom-right corner, the algorithm follows the path with the greatest LCS length,
 * effectively reconstructing the common subsequence.
 *
 * Example:
 * Given s1 = "ABCBDAB" and s2 = "BDCAB", the LCS is "BCAB" with a length of 4.
 *
 * @param {string} s1 The first input string.
 * @param {string} s2 The second input string.
 * @returns {string} The longest common subsequence of s1 and s2, along with its length in parentheses.
 */
const lcs = (s1: string, s2: string): string => {
	console.time(`LCSExecutionTime`);

	// Create a matrix to store intermediate results.
	// Initialize it with null values.
	const matrix = new Array(s1.length + 1)
		.fill(null)
		.map(() => new Array(s2.length + 1).fill(null));

	// Function to build the LCS matrix using dynamic programming
	const buildLCSMatrix = (end1: number, end2: number): number => {
		// Base case: If either of the strings is empty, LCS length is 0.
		if (end1 === -1 || end2 === -1) {
			return 0;
		}

		// Check if the result for the current cell is already computed.
		if (matrix[end1][end2] !== null) {
			return matrix[end1][end2];
		}

		// If the characters at the current positions match, increment LCS length.
		if (s1[end1] === s2[end2]) {
			matrix[end1][end2] = 1 + buildLCSMatrix(end1 - 1, end2 - 1);
			return matrix[end1][end2];
		} else {
			// If characters don't match, take the maximum of the lengths from the left or above cell.
			matrix[end1][end2] = Math.max(
				buildLCSMatrix(end1 - 1, end2),
				buildLCSMatrix(end1, end2 - 1)
			);
			return matrix[end1][end2];
		}
	};

	// Call the function to build the LCS matrix, which returns the length of LCS.
	const lcsLength = buildLCSMatrix(s1.length - 1, s2.length - 1);

	// Initialize the LCS string to be constructed.
	let lcsStr = '';
	// Start from the last character of both strings.
	let i = s1.length - 1,
		j = s2.length - 1;

	// Reconstruct the LCS string by backtracking through the matrix.
	while (i >= 0 && j >= 0) {
		if (s1[i] === s2[j]) {
			// If the current characters in both strings match, they are part of the LCS.
			// Add this character to the LCS string.
			lcsStr = s1[i] + lcsStr;

			// Move diagonally up-left in the matrix: decrement both indices.
			// This corresponds to moving to the previous character in both strings.
			i--;
			j--;
		} else {
			// If the characters do not match, determine the direction with the greater LCS length
			if (i === 0) {
				// If we are at the first row, move left.
				j--;
			} else if (j === 0) {
				// If we are at the first column, move up.
				i--;
			} else if (matrix[i - 1][j] > matrix[i][j - 1]) {
				// If the value above is greater, move up. The current character in s1 does not contribute to the LCS.
				i--;
			} else {
				// If the value to the left is greater or equal, move left. The current character in s2 does not contribute to the LCS.
				j--;
			}
		}
	}

	// The constructed string lcsStr now contains the LCS of s1 and s2, and lcsLength stores its length.
	const lcsResult = `${lcsStr} (${lcsLength})`;

	console.timeEnd(`LCSExecutionTime`);

	// Return the LCS result string.
	return lcsResult;
};

export default lcs;
