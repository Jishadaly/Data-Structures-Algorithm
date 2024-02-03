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

  swap(index1 , index2){
     const temp = this.heap[index1]
     this.heap[index1] = this.heap[index2]
     this.heap[index2] = temp
  }
  
  heapifyUp(index){
    const parentIndex = this.getParentIndex(index)

    if (parentIndex >=0 && this.heap[parentIndex] > this.heap[index]) {
        this.swap(index , parentIndex)
        this.heapifyUp(parentIndex);
    }
  }
  
}

