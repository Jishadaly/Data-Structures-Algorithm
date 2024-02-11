class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    // Function to swap two elements in the heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Function to get the index of the parent of a node
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Function to maintain the min-heap property by bubbling up
    bubbleUp(index) {
      while (index > 0 && this.heap[index].priority < this.heap[this.getParentIndex(index)].priority) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    // Function to insert an element into the priority queue
    insert(value, priority) {
      const element = { value, priority };
      this.heap.push(element);
      this.bubbleUp(this.heap.length - 1);
    }
  
    // Function to get the index of the left child of a node
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Function to get the index of the right child of a node
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Function to maintain the min-heap property by bubbling down
    bubbleDown(index) {
      let minChildIndex = index;
  
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[minChildIndex].priority) {
        minChildIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[minChildIndex].priority) {
        minChildIndex = rightChildIndex;
      }
  
      if (index !== minChildIndex) {
        this.swap(index, minChildIndex);
        this.bubbleDown(minChildIndex);
      }
    }
  
    // Function to extract the element with the minimum priority
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const minElement = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.bubbleDown(0);
      }
  
      return minElement;
    }
  
    // Function to check if the priority queue is empty
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // Example usage:
  
  const priorityQueue = new PriorityQueue();
  
  priorityQueue.insert("Task 1", 3);
  priorityQueue.insert("Task 2", 1);
  priorityQueue.insert("Task 3", 2);
  
  while (!priorityQueue.isEmpty()) {
    const task = priorityQueue.extractMin();
    console.log(`Processing ${task.value} with priority ${task.priority}`);
  }
  