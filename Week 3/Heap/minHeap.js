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
}

