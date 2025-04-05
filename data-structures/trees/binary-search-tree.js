class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
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
}

//        9
//    4       20
// 1    6   15    170

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log(JSON.stringify(traverse(myTree.root)));
console.log(myTree.lookup(15));
console.log(myTree.lookup(9));
console.log(myTree.lookup(99));

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
