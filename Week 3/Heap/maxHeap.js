class maxHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp

  }

 heapfyUp(index){
  const parentIndex = this.getRightIndex(index)
  if ( parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
       this.swap(index , parentIndex)
       this.heapfyUp( parentIndex)
  }
 }


 insert(value){
  this.heap.push(value)
  this.heapfyUp(this.heap.length - 1)
 }

 remove(){
   if (this.heap.length === 0) {
      return null
   }
   if (this.heap.length === 1) {
     return this.heap.pop()
   }
   const max = this.heap[0]
   this.heap[0] = this.heap.pop()
   this.heapfyDown(0)
   return max
 }

 heapfyDown(index){
   const leftChildIndex = this.getLeftIndex(index)
   const getRightIndex = this.getRightIndex(index)
  const  maxIndex = index
   if (leftChildIndex >=0 && this.heap[leftChildIndex] < this.heap[maxIndex]) {
        maxIndex =  leftChildIndex    
   }
   if (getRightIndex >0 && this.heap[getRightIndex] < this.heap[maxIndex]) {
    maxIndex = getRightIndex;
   }
   if (maxIndex !== index) {
     this.swap(index , maxIndex)
     this.heapfyDown(maxIndex)
   }
 }

 



}