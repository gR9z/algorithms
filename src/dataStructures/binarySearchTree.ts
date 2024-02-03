/**
 * Binary Search Tree (BST) is a hierarchical data structure that provides
 * efficient insertion, search, and deletion operations. It's designed to
 * maintain a sorted set of elements, which makes it useful for tasks like
 * searching and maintaining order in datasets.
 *
 * Strengths:
 * - Efficient searching: In an average case, search operations take O(log n)
 *   time complexity, where n is the number of nodes in the tree.
 * - Ordered data: BSTs keep elements in sorted order, making it easy to
 *   retrieve data in a sorted manner.
 * - Memory-efficient: BSTs are memory-efficient compared to other data
 *   structures like arrays or linked lists.
 *
 * Limitations:
 * - Imbalanced trees: In the worst case, if elements are inserted in a
 *   sorted order, the tree can become highly unbalanced, resulting in
 *   performance degradation (O(n) worst-case search).
 * - Deletion complexity: Removing nodes from a BST can be complex, especially
 *   for nodes with two children, as it requires reorganizing the tree.
 *
 * Under the hood:
 * - Each node in the tree has a left and right child node, which are themselves
 *   BSTs. This recursive structure allows for efficient search operations.
 * - The tree is ordered such that the left subtree of a node contains only
 *   nodes with values less than the node's value, and the right subtree
 *   contains nodes with values greater than the node's value.
 * - When searching, the algorithm compares the target value with the current
 *   node's value and traverses either the left or right subtree accordingly.
 * - Insertions maintain the ordering by recursively finding the correct place
 *   for the new node in the tree.
 *
 * Note: To ensure balanced trees, self-balancing binary search trees (e.g., AVL
 * trees, Red-Black trees) can be used.
 */

/**
 * BinarySearchTreeNode represents a node in a Binary Search Tree.
 */
class BinarySearchTreeNode<T> {
	data: T;
	leftNode?: BinarySearchTreeNode<T>;
	rightNode?: BinarySearchTreeNode<T>;

	constructor(data: T) {
		this.data = data;
	}
}

/**
 * BinarySearchTree is a class that implements a Binary Search Tree.
 * It supports insertion, searching, and three types of tree traversal.
 */
class BinarySearchTree<T> {
	root: BinarySearchTreeNode<T> | null = null;
	comp: (a: T, b: T) => number;

	constructor(comp: (a: T, b: T) => number) {
		this.comp = comp;
	}

	/**
	 * Inserts a new node with the given data into the Binary Search Tree (BST).
	 *
	 * @param data The data to be inserted into the BST.
	 * @returns The newly inserted node or undefined if the tree was empty.
	 */
	insert(data: T): BinarySearchTreeNode<T> | undefined {
		// If the tree is empty, create a new node as the root.
		if (!this.root) {
			this.root = new BinarySearchTreeNode(data);
			return this.root;
		}

		// Start traversal from the root.
		let current = this.root;

		// Continue until a suitable position is found for the new node.
		while (true) {
			// Compare the new data with the current node's data.
			if (this.comp(data, current.data) === 1) {
				// If the new data is greater, move to the right subtree.
				if (current.rightNode) {
					current = current.rightNode; // Traverse right.
				} else {
					// If there's no right child, insert the new node here.
					current.rightNode = new BinarySearchTreeNode(data);
					return current.rightNode; // Return the newly inserted node.
				}
			} else {
				// If the new data is less or equal, move to the left subtree.
				if (current.leftNode) {
					current = current.leftNode; // Traverse left.
				} else {
					// If there's no left child, insert the new node here.
					current.leftNode = new BinarySearchTreeNode(data);
					return current.leftNode; // Return the newly inserted node.
				}
			}
		}
	}

	/**
	 * search finds a value in the Binary Search Tree.
	 * It compares the value with the current node and moves left or right
	 * until it finds the value or reaches a leaf node.
	 */
	search(data: T): BinarySearchTreeNode<T> | undefined {
		if (!this.root) return undefined;

		let current = this.root;

		// Continue searching until the target data is found (comp returns 0)
		while (this.comp(data, current.data) !== 0) {
			if (this.comp(data, current.data) === 1) {
				if (!current.rightNode) {
					// If there's no right node and we're still searching, the data is not found
					console.log('Not found');
					return;
				}
				// Move to the right child node
				current = current.rightNode;
			} else {
				if (!current.leftNode) {
					// If there's no left node and we're still searching, the data is not found
					console.log('Not found');
					return;
				}
				// Move to the left child node
				current = current.leftNode;
			}
		}

		// If the loop exits, it means the target data is found in the tree
		console.log(current);
		return current;
	}

	/**
	 * inOrderTraversal performs an in-order traversal of the Binary Search Tree.
	 * It visits nodes in ascending order by first traversing the left subtree,
	 * then the current node, and finally the right subtree.
	 */
	inOrderTraversal(node: BinarySearchTreeNode<T> | undefined | null): void {
		if (node) {
			this.inOrderTraversal(node.leftNode);
			console.log(node.data);
			this.inOrderTraversal(node.rightNode);
		}
	}

	/**
	 * postOrderTraversal performs a post-order traversal of the Binary Search Tree.
	 * It visits nodes by first traversing the left subtree, then the right subtree,
	 * and finally the current node. This may not result in sorted order.
	 */
	postOrderTraversal(node: BinarySearchTreeNode<T> | undefined | null): void {
		if (node) {
			this.postOrderTraversal(node.leftNode);
			this.postOrderTraversal(node.rightNode);
			console.log(node.data);
		}
	}

	/**
	 * preOrderTraversal performs a pre-order traversal of the Binary Search Tree.
	 * It visits nodes by first traversing the current node, then the left subtree,
	 * and finally the right subtree.
	 */
	preOrderTraversal(node: BinarySearchTreeNode<T> | undefined | null): void {
		if (node) {
			console.log(node.data);
			this.preOrderTraversal(node.leftNode);
			this.preOrderTraversal(node.rightNode);
		}
	}
}

/**
 * comp is a comparison function that returns -1, 0, or 1 based on the comparison
 * between two numbers a and b. It's used to determine the position of nodes in the tree.
 */
export const comp = (a: number, b: number) => {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
};

export default BinarySearchTree;
