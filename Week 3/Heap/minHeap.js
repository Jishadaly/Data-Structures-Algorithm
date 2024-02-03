class MinHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftchildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index)

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex)
      this.heapifyUp(parentIndex);
    }
  }
  
  insert(value) {

    this.heap.push(value)
    this.heapifyUp( this.heap.length - 1 )
      
  }

  remove() {
    if (this.heap.length === 0) {
      return null
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0)

    return min;
  }

  heapifyDown(index) {

    const leftchildIndex = this.getLeftchildIndex(index)
    const righttchildIndex = this.getRightChildIndex(index)

    let minIndex = index

    if (leftchildIndex < this.heap.length && this.heap[leftchildIndex] < this.heap[minIndex]) {
      minIndex = leftchildIndex
    }

    if (righttchildIndex < this.heap.length && this.heap[righttchildIndex] < this.heap[minIndex]) {
      minIndex = righttchildIndex
    }

    if (minIndex !== index) {

      this.swap(index, minIndex)
      this.heapifyDown(minIndex)

    }
  }

}

