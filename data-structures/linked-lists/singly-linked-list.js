class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		this.tail.next = new Node(value);
		this.tail = this.tail.next;
		this.length++;
		return this.print();
	}

	prepend(value) {
		const temp = this.head;
		this.head = new Node(value, temp);
		this.length++;
		return this.print();
	}

	traverseToIndex(index) {
		let curr = this.head;

		for (let i = 0; i < index; i++) {
			curr = curr?.next;

			if (curr === null) {
				throw new Exception("Index out of range");
			}
		}

		return curr;
	}

	insert(index, value) {
		if (index === 0) {
			return this.prepend(value);
		}

		if (index >= this.length) {
			return this.append(value);
		}

		let precedingNode = this.traverseToIndex(index - 1);

		const newNode = new Node(value, precedingNode.next);
		precedingNode.next = newNode;

		this.length++;
		return this.print();
	}

	remove(index) {
		if (index >= this.length) {
			throw new Exception("Index out of range");
		}

		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return this.print();
		}

		let precedingNode = this.traverseToIndex(index - 1);

		if (precedingNode.next === this.tail) {
			// did not remove the tail
			precedingNode.next = null;
			this.tail = precedingNode;
		} else {
			precedingNode.next = precedingNode.next.next;
		}

		this.length--;

		return this.print();
	}

	reverse() {
		let prev = null;
		let curr = this.head;
		this.tail = this.head;

		while (curr) {
			const temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}

		this.head = prev;

		return this.print();
	}

	print() {
		const result = [];
		let curr = this.head;
		while (curr) {
			result.push(curr.value);
			curr = curr.next;
		}
		return result;
	}
}

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(5, 200);
myLinkedList.remove(4);
console.log(myLinkedList.print());
myLinkedList.reverse();
console.log(myLinkedList.print());
