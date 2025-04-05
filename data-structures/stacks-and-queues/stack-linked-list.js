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

const myStack = new Stack();
console.log(myStack.push("Discord"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Google"));
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
