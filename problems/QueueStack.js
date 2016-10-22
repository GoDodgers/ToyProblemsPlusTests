/**
Queue Stack
Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.
*/

function Stack() {
	let storage = [];

	this.push = (value) => storage.push(value);
	this.pop = () => storage.pop();
	this.size = () => storage.length;
}

function Queue() {
	let inbox = new Stack();
	let outbox = new Stack();

	this.size = () => inbox.size();
	this.dequeue = () => inbox.pop();
	this.enqueue = (value) => {
		if (!this.size()) {
			inbox.push(value);
			return;
		}
		while (inbox.size()) {
			outbox.push(inbox.pop());
		}

		inbox.push(value);

		while (outbox.size()) {
			inbox.push(outbox.pop());
		}
	};
}
