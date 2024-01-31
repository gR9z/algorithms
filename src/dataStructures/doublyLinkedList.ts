// Definition of a class named 'Node' to represent each element (node) in the doubly linked list.
class Node {
	// The 'value' property stores the actual data of the node. This can be a number in this case.
	value: number;

	// The 'next' property is a reference (pointer) to the next Node in the list.
	// It is initialized to null, meaning the node does not link to another node by default.
	// This reference is what makes the structure a linked list.
	next: Node | null = null;

	// The 'prev' property is a reference (pointer) to the previous Node in the list.
	// Similar to 'next', it is initialized to null.
	// The presence of 'prev' is what makes the list a doubly linked list,
	// as each node keeps track of both its next and previous neighbors.
	prev: Node | null = null;

	// Constructor for the Node class. It initializes the node with a value.
	// When a new node is created, its 'next' and 'prev' references are set to null,
	// indicating that it's not yet linked to other nodes in the list.
	constructor(value: number) {
		this.value = value;
	}
}

export class DoublyLinkedList {
	// The 'head' pointer, initially set to null, represents the start of the list.
	// The 'tail' pointer, also initially null, represents the end of the list.
	head: Node | null = null;
	tail: Node | null = null;

	append(value: number): void {
		const newNode = new Node(value);

		// If the list is currently empty (head is null), set both head and tail to the new node.
		if (!this.head) {
			this.head = newNode; // The new node becomes the head of the list.
			this.tail = newNode; // As the only node in the list, it is also the tail.

			console.log(`Head is "${newNode.value}".`);

			return;
		}

		// If the list is not empty and has a tail, append the new node at the end.
		if (this.tail) {
			newNode.prev = this.tail; // Link the new node's 'prev' to the current tail.
			this.tail.next = newNode; // Link the current tail's 'next' to the new node.
			this.tail = newNode; // Update the tail of the list to be the new node.

			console.log(`New node of value "${newNode.value}" has been added.`);
		}
	}

	delete(targetValue: number): void {
		// Initialize a flag to track if the target value is found and deleted.
		let targetFound: boolean = false;

		// Check if the list is empty. If it is, there is nothing to delete.
		if (!this.head) return;

		// Check if the head (first node) has the target value.
		if (this.head.value === targetValue) {
			// Move the head reference to the next node in memory, effectively removing the first node.
			this.head = this.head.next;

			// If the new head is not null, update its 'prev' property to null.
			// The 'prev' property of the new head node now points to null instead of the deleted node.
			if (this.head) this.head.prev = null;

			// If the new head is null (list is now empty), set the tail reference to null.
			if (!this.head) this.tail = null;

			// Set the flag to true since the target value was found and deleted.
			targetFound = true;
		} else {
			// Initialize pointers for traversal.
			// 'previous' holds a reference to the node before 'current' in the memory.
			let previous: Node | null = null;
			let current: Node | null = this.head;

			// Traverse the list starting from the head.
			while (current) {
				// Check if the current node's value matches the target value.
				if (current.value === targetValue) {
					// If 'previous' is not null, link it to 'current.next'.
					// This changes the 'next' reference of 'previous' to skip over 'current'.
					if (previous) {
						previous.next = current.next;
					}

					// If 'current' has a next node, update the 'prev' pointer of the next node.
					// This changes the 'prev' reference of the node following 'current' in memory
					// to point to 'previous', bypassing 'current'.
					if (current.next) {
						current.next.prev = previous;
					}

					// If 'current' is the tail, update the tail reference to 'previous'.
					// 'this.tail' now holds a reference to the 'previous' node in memory.
					if (current === this.tail) {
						this.tail = previous;
					}

					// Set the flag to true since the target value was found and deleted.
					targetFound = true;

					break; // Exit the loop after deleting the node.
				}

				// Move the 'previous' and 'current' references forward.
				// 'previous' now refers to the same node as 'current', and 'current' refers to the next node in memory.
				previous = current;
				current = current.next;
			}
		}

		// Check the flag and print the appropriate message based on whether the target was deleted.
		targetFound
			? console.log(`Target deleted (${targetValue})`)
			: console.log(`${targetValue} not found`);

		return;
	}

	// Method to display the contents of the list.
	display(reverse: boolean = false): void {
		// Set the starting point: 'tail' for reverse, 'head' for normal order.
		let current = reverse ? this.tail : this.head;

		// Traverse the list from the starting point.
		while (current) {
			console.log(current.value);

			// Move to the next node in the specified direction.
			current = reverse ? current.prev : current.next;
		}
	}

	// Method to search for a specific value in the list.
	search(targetValue: number): number {
		// Start from the head of the list.
		let current = this.head;

		// Traverse the list.
		while (current) {
			// Check if the current node's value matches the target.
			if (current.value === targetValue) {
				console.log(
					`Value found: ${current.value}. Prev: ${current?.prev?.value}. Next: ${current?.next?.value}`
				);

				return current.value;
			}
			current = current.next; // Move to the next node.
		}

		console.log(`Value not found (${targetValue})`);

		return -1; // Return -1 to indicate that the value wasn't found.
	}

	// Method to determine the length of the list.
	length(): number {
		let current = this.head;
		let count = 0;

		// Traverse the list, counting each node.
		while (current) {
			count++;
			current = current.next; // Move to the next node.
		}

		console.log(`Count: ${count}.`);
		return count;
	}

	// Method to check if the list is empty.
	isEmpty(): boolean {
		// Return true if 'head' is null (indicating the list is empty), otherwise false.
		return !this.head;
	}
}
