class Stack {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
	}

	pop() {
		return this.array.pop();
	}

	isEmpty() {
		return this.array.length === 0;
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
