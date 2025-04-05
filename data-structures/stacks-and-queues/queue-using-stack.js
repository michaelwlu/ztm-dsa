class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
		// this implementation intentionally skips tracking the bottom node, since a standard stack does not need it
	}

	peek() {
		return this.top.value;
	}

	push(value) {
		this.top = new Node(value, this.top);
		this.length++;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}

		const currTopValue = this.top.value;
		this.top = this.top.next;
		this.length--;
		return currTopValue;
	}

	isEmpty() {
		return this.length === 0;
	}
}

class Queue {
	constructor() {
		this.queue = new Stack();
	}

	peek() {
		return this.queue.peek();
	}

	enqueue(value) {
		const tempStack = new Stack();

		while (!this.queue.isEmpty()) {
			tempStack.push(this.queue.pop());
		}

		tempStack.push(value);

		while (!tempStack.isEmpty()) {
			this.queue.push(tempStack.pop());
		}
	}

	dequeue() {
		return this.queue.pop();
	}

	isEmpty() {
		return this.queue.isEmpty();
	}
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Discord"));
console.log(myQueue.enqueue("Udemy"));
console.log(myQueue.enqueue("Google"));
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
