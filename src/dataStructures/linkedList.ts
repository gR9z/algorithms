/**
 * LinkedList is a linear data structure where elements are not stored in contiguous locations.
 * Each element (node) contains a reference (link) to the next node in the sequence.
 * Advantages:
 * - Dynamic size: Can grow or shrink during execution.
 * - Efficient insertion/deletion: No need to shift elements after insertion/deletion.
 * Limitations:
 * - Direct access not possible: Need to traverse from the head to access a particular node.
 * - Extra memory: Each node requires extra memory for the reference (next).
 * - Not cache-friendly: Nodes may not be stored contiguously in memory.
 */

class Node {
	value: number;
	next: Node | null = null;

	constructor(value: number) {
		this.value = value;
	}
}

// Define the LinkedList class
export class LinkedList {
	head: Node | null = null; // Head of the list, initialized to null
	tail: Node | null = null; // Tail of the list, initialized to null

	// Add node to the end of the list
	append(value: number) {
		const newNode = new Node(value); // Create a new node with the given value

		// If list is empty, new node becomes the head and the tail
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		if (this.tail) {
			// If the tail exists, it means the list is not empty.
			// Here, we set the 'next' property of the current tail to point to the new node.
			// This effectively links the new node to the end of the list.
			this.tail.next = newNode;

			// After linking the new node, we update the 'tail' property of the list.
			// The new node now becomes the new tail of the list.
			// This is because, in a singly linked list, the tail is always the last node.
			this.tail = newNode;
		}
	}

	// Delete a node by its value
	delete(targetValue: number): void {
		// If the list is empty, there's nothing to delete
		if (!this.head) return;

		// If the target value is in the first node (head)
		if (this.head.value === targetValue) {
			this.head = this.head.next; // Remove the head node
			if (!this.head) this.tail = null; // If the list becomes empty, also reset the tail

			return;
		}

		// Initialize 'previous' and 'current' pointers
		// 'previous' starts as null since there is no node before head
		// 'current' starts at the head of the list
		let previous: Node | null = null;
		let current: Node | null = this.head;

		// Iterate through the list until the end is reached (current becomes null)
		while (current) {
			// Check if the current node contains the target value
			if (current.value === targetValue) {
				// If there is a 'previous' node, link it to the node after 'current'
				// This effectively removes 'current' from the list
				if (previous) {
					previous.next = current.next;
				}

				// Check if the 'current' node is the tail
				// If so, update the 'tail' to be the 'previous' node
				if (current === this.tail) {
					this.tail = previous;
				}
				console.log(`${targetValue} has been deleted.`);
				return;
			}

			// Move forward in the list
			// Set 'previous' to 'current', and 'current' to the next node in the list
			previous = current;
			current = current.next;
		}

		// If the loop completes without returning, the target value was not found
		console.log(`${targetValue} does not exist.`);
	}

	// Diplay the list
	display() {
		let current = this.head;

		while (current) {
			console.log(current.value); // Print each node's value
			current = current.next; // Move to next node
		}
	}

	// Search for a specific value and return its index (position)
	search(targetValue: number): number {
		let count = 0;
		let current = this.head;

		while (current) {
			if (current.value === targetValue) {
				return count; // Return the position if found
			}
			count++;
			current = current.next; // Move to next node
		}

		return -1; // Return -1 if not found
	}

	// Find the length of the list
	length(): number {
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	// Check if the list is empty
	isEmpty(): boolean {
		return !this.head;
	}
}
