// class minHeap {
//   constructor() {
//     this.heap = []
//   }

//   getParentIndex(index){
//     return Math.floor((index -1)/2)
//   }
//   getLeftChildIndex(index){
//     return 2 * index +1
//   }
//   getRightChildIndex(index){
//     return 2* index + 2
//   }

//   swap(index1 , index2){
//     const temp = this.heap[index1]
//     this.heap[index1] = this.heap[index2]
//     this.heap[index2] = temp
//   }
//   heapfyUp(index){
//     let parentIndex = this.getParentIndex(index)
//     if (parentIndex>=0 && this.heap[parentIndex] >this.heap[index]) {
//       this.swap(parentIndex , index)
//       this.heapfyUp(parentIndex)
//     }
//   }
//   insert(value){
//     this.heap.push(value)
//     this.heapfyUp(this.heap.length - 1)
//   }

//   remove(){
//     if (this.heap.length === 0) {
//         return null
//     }
//     if (this.heap.length === 1) {
//       return this.heap.pop()
//     }
//     const min = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapfyDown(0)
//     return min
//   }

//   heapfyDown(index){

//     const leftchildIndex  = this.getLeftChildIndex(index)
//     const rightchildIndex = this.getRightChildIndex(index)

//     let minIndex = index

//     if (leftchildIndex < this.heap.length && this.heap[leftchildIndex] < this.heap[minIndex]) {
//         minIndex = leftchildIndex
//     }
//     if (rightchildIndex < this.heap.length && this.heap[rightchildIndex] < this.heap[minIndex]) {
//          minIndex = rightchildIndex
//     }
//     if (index !== minIndex) {
//       this.swap(index , minIndex)
//       this.heapfyDown(minIndex)
//     }
//   }

// }

class minHeap {

  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  getLeftChildIndex(index) {
    return 2 * index + 1
  }
  getRightParentChild(index) {
    return 2 * index + 2
  }

  insert(value) {
    this.heap.push(value)
    this.heapfyUp(this.heap.length - 1);
  }
  heapfyUp(index) {
    const parentIndex = this.getParentIndex(index)

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex)

      this.heapfyUp(parentIndex)
    }
  }
  swap(index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
  remove() {
    if (this.heap.length === 0) {
      return null
    }
    if (this.heap.length === 1) {
      this.heap.pop()
    }

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapfyDown(0)
    return min
  }
  
  heapfyDown(index) {
    const leftchildIndex = this.getLeftChildIndex(index)
    const rightchildIndex = this.getRightParentChild(index)

    let minIndex = index

    if (leftchildIndex < this.heap.length && this.heap[leftchildIndex] < this.heap[minIndex]) {
      minIndex = leftchildIndex
    }

    if (rightchildIndex < this.heap.length && this.heap[rightchildIndex] < this.heap[minIndex]) {
      minIndex = rightchildIndex
    }

    if (minIndex !== index) {
      this.swap(index, minIndex);
      this.heapfyDown(minIndex);
    }
  }

}


const min = new minHeap()

min.insert(10)
min.insert(50)
min.insert(60)

console.log(min);