class TreeNode {
	data: number;
	height: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(data: number) {
		this.data = data;
		this.height = 1; // Initially set to 1 because a node without children is at height 1
		this.left = null; // Initialized as null, meaning there's no left child yet
		this.right = null; // Initialized as null, meaning there's no right child yet
	}
}

class avlTree {
	root: TreeNode | null;

	constructor() {
		this.root = null;
	}

	height(node: TreeNode | null): number {
		if (node === null) return -1; // The height of an empty tree is considered -1

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		return Math.max(leftHeight, rightHeight) + 1; // Height is the max of left and right subtree heights plus one
	}

	balanceFactor(node: TreeNode | null): number {
		if (node === null) return 0; // A null node has a balance factor of 0

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		return leftHeight - rightHeight; // Balance factor is the difference in heights between left and right subtrees
	}

	// Left rotation function for an AVL tree
	leftRotate(node: TreeNode | null): TreeNode | null {
		if (node === null) {
			return null; // If the node is null, there's nothing to rotate
		}

		const newRoot = node.right; // The new root after rotation will be the current right child of the node

		if (newRoot === null) {
			return node; // If the current right child is null, left rotation cannot be performed
		}

		// Performing the left rotation:
		node.right = newRoot.left; // Detach the left subtree of newRoot and attach it as the right subtree of node

		// This line is critical in the left rotation process. It establishes a new parent-child relationship
		// between the node and newRoot. Here's what happens under the hood:
		newRoot.left = node;
		// 1. The current node (which was the root of the subtree before rotation) becomes the left child of newRoot.
		//    This effectively moves the node down one level in the tree and to the left, while elevating newRoot to be the new subtree root.

		// In terms of memory:
		// - Before this operation, 'node' was pointing to its original right child through its 'right' property,
		//   and 'newRoot' was this right child. Now, 'newRoot's left property is updated to point back to 'node',
		//   creating a bidirectional link between them.
		// - This doesn't create any new nodes in memory; instead, it changes the pointers (references) between existing nodes.
		//   Specifically, the 'left' pointer of 'newRoot' is updated to reference 'node', and 'node' now effectively becomes a child of 'newRoot'.

		// After the assignment:
		// - 'node' is now the left child of 'newRoot', and any previous left subtree of 'newRoot' has been reattached to 'node'.
		// - This operation modifies the tree structure at a higher level, altering the paths to reach each node involved.
		// - Internally, this is managed by changing the addresses stored in the pointer variables of the TreeNode objects.
		//   No TreeNode objects are moved in memory; rather, the references (pointers) that define the tree's structure are updated.
		// - This effectively maintains the integrity of the AVL tree structure by ensuring that after the rotation,
		//   the tree remains a valid binary search tree with the added benefit of improved balance, according to AVL tree properties.

		// After rotation, update the heights of affected nodes:
		node.height =
			Math.max(this.height(node.left), this.height(node.right)) + 1; // Update the height of the original node
		newRoot.height =
			Math.max(this.height(newRoot.left), this.height(newRoot.right)) + 1; // Update the height of the new root

		return newRoot; // The new root is returned to be connected back to the parent tree if necessary
	}
}
