class TreeNode {
	data: number;
	height: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(data: number) {
		this.data = data;
		this.height = 1;
		this.left = null;
		this.right = null;
	}
}

class avlTree {
	root: TreeNode | null;

	constructor() {
		this.root = null;
	}

	height(node: TreeNode | null): number {
		if (node === null) return -1;

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	balanceFactor(node: TreeNode | null): number {
		if (node === null) return 0;

		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		return leftHeight - rightHeight;
	}

	leftRotate(node: TreeNode | null): TreeNode | null {
		if (node === null) {
			return null;
		}

		const newRoot = node.right;
		if (newRoot === null) {
			return node;
		}

		node.right = newRoot.left;
		newRoot.left = node;
		return newRoot;
	}
}
