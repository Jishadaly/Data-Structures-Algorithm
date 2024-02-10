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

// class minHeap {

//   constructor() {
//     this.heap = []
//   }
//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2)
//   }
//   getLeftChildIndex(index) {
//     return 2 * index + 1
//   }
//   getRightParentChild(index) {
//     return 2 * index + 2
//   }

//   insert(value) {
//     this.heap.push(value)
//     this.heapfyUp(this.heap.length - 1);
//   }
//   heapfyUp(index) {
//     const parentIndex = this.getParentIndex(index)

//     if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
//       this.swap(index, parentIndex)

//       this.heapfyUp(parentIndex)
//     }
//   }
//   swap(index1, index2) {
//     let temp = this.heap[index1]
//     this.heap[index1] = this.heap[index2]
//     this.heap[index2] = temp
//   }
//   remove() {
//     if (this.heap.length === 0) {
//       return null
//     }
//     if (this.heap.length === 1) {
//       this.heap.pop()
//     }

//     const min = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapfyDown(0)
//     return min
//   }
  
//   heapfyDown(index) {
//     const leftchildIndex = this.getLeftChildIndex(index)
//     const rightchildIndex = this.getRightParentChild(index)

//     let minIndex = index

//     if (leftchildIndex < this.heap.length && this.heap[leftchildIndex] < this.heap[minIndex]) {
//       minIndex = leftchildIndex
//     }

//     if (rightchildIndex < this.heap.length && this.heap[rightchildIndex] < this.heap[minIndex]) {
//       minIndex = rightchildIndex
//     }

//     if (minIndex !== index) {
//       this.swap(index, minIndex);
//       this.heapfyDown(minIndex);
//     }
//   }

// }


// const min = new minHeap()

// min.insert(10)
// min.insert(50)
// min.insert(60)

// console.log(min);


// class MinHeap{
//   constructor(){
//     this.heap = []
//   }
//   getParentIndex(index){
//     return Math.floor((index - 1)/2)
//   }
//   getLeftChiledIndex(index){
//     return index * 2 + 1
//   }
//   getRightChiledIndex(index){
//     return index * 2 + 1
//   }
//   swap(index1 , index2){
//      let temp = this.heap[index1]
//      this.heap[index1] = this.heap[index2]
//      this.heap[index2]  = temp
//   }

//   insert(value){
//      this.heap.push(value)
//      this.heapfyUp(this.heap.length - 1)
//   }
//   heapfyUp(index){
//     const parentIndex  = this.getParentIndex(index)
//     if (parentIndex >= 0  && this.heap[parentIndex] > this.heap[index]) {
//         this.swap( parentIndex , index)
//         this.heapfyUp(parentIndex)
//     }
//   }
//    remove(){
//     if (this.heap.length === 0) {
//       return null 
//     }
//     if (this.heap.length === 1) {
//       return this.heap.pop()
//     }
//     const min= this.heap[0]
//     this.heap[0] = this.heap.pop()

//     this.heapfyDown(0)

//     return min
//   }
//   heapfyDown(index){
//     const leftChildIndex = this.getLeftChiledIndex(index)
//     const rightchildIndex = this.getRightChiledIndex(index)

//     let minIndex = index

//     if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[minIndex]) {
//         minIndex = index
//     }
//     if (rightchildIndex < this.heap.length && this.heap[rightchildIndex] > this.heap[minIndex]) {
//       minIndex = index
//     }
//     if (minIndex !== index) {
//       this.swap( index , minIndex)
//       this.heapfyDown(minIndex)
//     }
//   }
// }

// const minHeap = new  MinHeap()

// minHeap.insert(20)

// minHeap.insert(58)
// minHeap.insert(5)
// minHeap.insert(10)
// minHeap.remove()

// console.log(minHeap.heap);


class MinHeap {
  constructor(){
    this.heap = []
  }

  getParentIndex(index){
    return Math.floor((index -1 )/2)
  }
  getRightChildIndex(index){
    return index * 2 + 2
  }
  getLeftChildIndex(index){
    return index * 2 + 1
  }

  swap(index1 , index2){
     let temp = this.heap[index1]
     this.heap[index1] = this.heap[index2]
     this.heap[index2] = temp
  }

  heapfyUp(index){

    let parentIndex = this.getParentIndex(index)
    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex , index)
      this.heapfyUp(parentIndex)
    }
  }

  insert(value){
    this.heap.push(value)
    this.heapfyUp(this.heap.length -1 )
  }
  delete(){
    if (this.heap.length === 0) {
      return false
    }
    if (this.heap.length === 1) {
     this.heap.pop()
    }
    let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapfyDown(0)
    return min
  }
  heapfyDown(index){
   const rightchildIndex = this.getRightChildIndex(index)
   const leftChildIndex = this.getLeftChildIndex(index)

   let minIndex = index
   if ( leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[minIndex]) {
       minIndex = index
   }
   if (rightchildIndex < this.heap.length && this.heap[rightchildIndex] > this.heap[minIndex]) {
    minIndex = index
   }

   if (minIndex !== index) {
    this.swap( index , minIndex)
    this.heapfyDown(minIndex)
   }
  }
}

const minHeap = new MinHeap()

minHeap.insert(50)
minHeap.insert(40)
minHeap.insert(60)
minHeap.delete()
console.log(minHeap.heap);