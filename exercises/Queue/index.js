/**
 * Queue
 * 
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 * 
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

function Queue() {
    this.queued = [];
    this.add = n => this.queued.push(n);
    this.remove = () => this.queued.splice(0, 1)[0];
};

module.exports = Queue;
