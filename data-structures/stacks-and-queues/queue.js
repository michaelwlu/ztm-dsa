class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first.value;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.length++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

		const currFirstValue = this.first.value;
		this.first = this.first.next;

		if (this.length === 1) {
			this.last = null;
		}

		this.length--;
		return currFirstValue;
	}

	isEmpty() {
		return this.length === 0;
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
