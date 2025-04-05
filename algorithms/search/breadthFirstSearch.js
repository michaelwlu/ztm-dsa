class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let currNode = this.root;

		while (true) {
			if (value < currNode.value) {
				if (!currNode.left) {
					currNode.left = newNode;
					return this;
				}

				currNode = currNode.left;
			} else {
				if (!currNode.right) {
					currNode.right = newNode;
					return this;
				}

				currNode = currNode.right;
			}
		}
	}

	lookup(value) {
		let currNode = this.root;

		while (currNode) {
			if (value === currNode.value) {
				return currNode;
			}

			if (value < currNode.value) {
				currNode = currNode.left;
			} else {
				currNode = currNode.right;
			}
		}

		return null;
	}

	remove(value, root = this.root) {
		if (!root) {
			return null;
		}

		if (value > root.value) {
			root.right = this.remove(value, root.right);
		} else if (value < root.value) {
			root.left = this.remove(value, root.left);
		} else {
			if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}

			let curr = root.right;
			while (curr.left) {
				curr = curr.left;
			}
			root.value = curr.value;
			root.right = this.remove(curr.value, root.right);
		}

		return root;
	}

	bfs() {
		let currentNode = this.root;
		let list = [];
		let queue = [];

		queue.push(currentNode);

		while (queue.length > 0) {
			currentNode = queue.shift();

			list.push(currentNode.value);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}

			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return list;
	}

	bfsRecursive(queue, list) {
		if (queue.length === 0) {
			return list;
		}

		let currentNode = queue.shift();
		list.push(currentNode.value);

		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}

		return this.bfsRecursive(queue, list);
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.bfs());
console.log(tree.bfsRecursive([tree.root], []));

//     9
//  4     20
//1  6  15  170
