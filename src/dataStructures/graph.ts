/**
 * This code implements a generic graph data structure essential in computer science for modeling networks, relationships, and pathways in various domains like social networks and transportation systems.
 *
 * It includes two main classes: `Node<T>` and `Graph<T>`, plus a `Queue<T>` class for graph traversal.
 *
 * `Node<T>` Class:
 * Represents a graph node. Stores data and adjacent nodes, supporting dynamic graph updates.
 *
 * `Graph<T>` Class:
 * Manages the graph. Adds/removes nodes and edges and implements Depth-First Search (DFS) and Breadth-First Search (BFS) for graph traversal.
 *
 * Uses a Map for efficient node storage and handling. A custom comparator function provides flexibility for different data types.
 */

export class Node<T> {
	data: T; // The data stored in the node.
	adjacent: Node<T>[]; // An array of adjacent nodes.
	comparator: (a: T, b: T) => number; // A comparator function to compare two data elements.

	// Constructor for the Node class.
	constructor(data: T, comparator: (a: T, b: T) => number) {
		this.data = data; // Initialize the node's data.
		this.adjacent = []; // Initialize an empty array for adjacent nodes.
		this.comparator = comparator; // Set the comparator function.
	}

	// Method to add an adjacent node.
	addAdjacent(node: Node<T>): void {
		this.adjacent.push(node); // Add the node to the adjacent array.
		console.log(`Node added: ${node.data}`); // Log the addition for visibility.
	}

	// Method to remove an adjacent node based on data.
	removeAdjacent(data: T): Node<T> | null {
		// Find the index of the node that matches the data.
		const index = this.adjacent.findIndex(
			(node) => this.comparator(node.data, data) === 0
		);

		if (index > -1) {
			// If a matching node is found, remove it from the adjacent array and return it.
			return this.adjacent.splice(index, 1)[0];
		}

		// If no matching node is found, return null.
		return null;
	}
}

/**
 * Graph class to represent a graph data structure.
 * It manages a set of nodes, ensuring each node is unique and can be retrieved or added efficiently.
 */
export class Graph<T> {
	// A map to store nodes. Keys are of type T and values are Node objects.
	nodes: Map<T, Node<T>> = new Map();

	// A comparator function to compare two data elements of type T.
	comparator: (a: T, b: T) => number;

	/**
	 * Constructor for the Graph.
	 * @param comparator A function to compare two elements of type T.
	 */
	constructor(comparator: (a: T, b: T) => number) {
		this.comparator = comparator;
	}

	/**
	 * Adds a new node to the graph with the given data.
	 * If a node with the same data already exists, it returns that node instead of creating a new one.
	 * @param data The data of the node to add.
	 * @returns The new or existing node.
	 */
	addNode(data: T): Node<T> {
		// Try to get the node if it already exists in the graph.
		let node = this.nodes.get(data);

		// If the node already exists, return it.
		if (node) return node;

		// If the node doesn't exist, create a new Node instance and add it to the map.
		node = new Node(data, this.comparator);
		this.nodes.set(data, node);

		// Return the newly created node.
		return node;
	}

	/**
	 * Remove a node, also remove it from other nodes adjacency list
	 *
	 * @param {T} data
	 * @returns {Node<T> | null}
	 */
	removeNode(data: T): Node<T> | null {
		// Attempt to retrieve the node to be removed from the graph.
		const nodeToRemove = this.nodes.get(data);

		// If the node does not exist, return null.
		if (!nodeToRemove) return null;

		// Iterate over all nodes in the graph.
		this.nodes.forEach((node) => {
			// For each node, remove the node to be deleted from its adjacency list.
			node.removeAdjacent(nodeToRemove.data);
		});

		// Remove the node from the graph.
		this.nodes.delete(data);

		// Return the removed node.
		return nodeToRemove;
	}

	/**
	 * Creates an edge between two nodes in the graph.
	 *
	 * @param {T} source The data of the source node.
	 * @param {T} destination The data of the destination node.
	 */
	addEdge(source: T, destination: T): void {
		// Add the source node to the graph, or get it if it already exists.
		const sourceNode = this.addNode(source);

		// Add the destination node to the graph, or get it if it already exists.
		const destinationNode = this.addNode(destination);

		// Add the destination node as an adjacent node to the source node,
		// effectively creating an edge from source to destination.
		sourceNode.addAdjacent(destinationNode);
	}

	/**
	 * Removes an edge between two nodes in the graph.
	 *
	 * @param {T} source The data of the source node.
	 * @param {T} destination The data of the destination node.
	 */
	removeEdge(source: T, destination: T): void {
		// Retrieve the source node from the graph.
		const sourceNode = this.nodes.get(source);

		// Retrieve the destination node from the graph.
		const destinationNode = this.nodes.get(destination);

		// If both nodes exist, remove the destination node from the adjacency list of the source node.
		// This effectively removes the edge from source to destination.
		if (sourceNode && destinationNode) {
			sourceNode.removeAdjacent(destination);
		}
	}

	/**
	 * Depth-first search
	 *
	 * @param {T} data
	 * @param {Map<T, boolean>} visited
	 * @returns
	 */
	private depthFirstSearchAux(node: Node<T>, visited: Map<T, boolean>): void {
		// If the node is null, return immediately.
		if (!node) return;

		// Mark the current node as visited.
		visited.set(node.data, true);

		// Output the data of the node.
		console.log(node.data);

		// Iterate over each adjacent node.
		node.adjacent.forEach((item) => {
			// If the adjacent node hasn't been visited, recursively search it.
			if (!visited.has(item.data)) {
				this.depthFirstSearchAux(item, visited);
			}
		});
	}

	depthFirstSearch() {
		// Initialize a map to keep track of visited nodes.
		const visited: Map<T, boolean> = new Map();

		// Iterate over each node in the graph.
		this.nodes.forEach((node) => {
			// If the node hasn't been visited, perform DFS starting from this node.
			if (!visited.has(node.data)) {
				this.depthFirstSearchAux(node, visited);
			}
		});
	}

	/**
	 * Auxiliary function for breadth-first search (BFS).
	 * Traverses the graph from a given node using BFS and marks each visited node.
	 * @param node The starting node for BFS traversal.
	 * @param visited Map to record the status of visited nodes.
	 */
	private breadthFirstSearchAux(
		node: Node<T>,
		visited: Map<T, boolean>
	): void {
		// Create a queue to store nodes to be visited in a breadth-first manner.
		const queue: Queue<Node<T>> = new Queue();

		// If the input node is null, return immediately.
		if (!node) return;

		// Add the starting node to the queue and mark it as visited.
		queue.add(node);
		visited.set(node.data, true);

		// Continue the breadth-first traversal until the queue is empty.
		while (!queue.isEmpty()) {
			// Remove the first node from the queue.
			const removedNode = queue.remove();

			// If the removed node is null, continue to the next iteration.
			if (!removedNode) continue;

			// Output the data of the removed node (visiting the node).
			console.log(removedNode.data);

			// Iterate over the adjacent nodes of the removed node.
			removedNode.adjacent.forEach((item) => {
				// If an adjacent node hasn't been visited, mark it as visited and add it to the queue.
				if (!visited.has(item.data)) {
					visited.set(item.data, true);
					queue.add(item);
				}
			});
		}
	}

	/**
	 * Perform breadth-first search starting from all unvisited nodes in the graph.
	 */
	breadthFirstSearch() {
		// Initialize a map to keep track of visited nodes.
		const visited: Map<T, boolean> = new Map();

		// Iterate over each node in the graph.
		this.nodes.forEach((node) => {
			// If the node hasn't been visited, perform BFS starting from this node.
			if (!visited.has(node.data)) {
				this.breadthFirstSearchAux(node, visited);
			}
		});
	}
}

/**
 * The Queue<T> class implements a queue data structure for managing a collection of elements in a FIFO (First In, First Out) manner.
 * In this context, the queue is used for traversing the graph in a breadth-first search manner, where nodes are visited level by level.
 * The queue ensures that nodes are processed in the order they are discovered, allowing for an efficient and orderly exploration of the graph.
 */
class Queue<T> {
	private items: T[] = [];

	/**
	 * Add an item to the end of the queue.
	 * @param item The item to add.
	 */
	add(item: T) {
		this.items.push(item);
	}

	/**
	 * Remove and return the first item in the queue.
	 * @returns The first item in the queue or undefined if the queue is empty.
	 */
	remove(): T | undefined {
		return this.items.shift();
	}

	/**
	 * Check if the queue is empty.
	 * @returns True if the queue is empty, false otherwise.
	 */
	isEmpty(): boolean {
		return this.items.length === 0;
	}
}

export function comparator(a: number, b: number) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}
