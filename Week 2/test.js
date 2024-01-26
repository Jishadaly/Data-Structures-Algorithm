// const arr = [8, 20, -2, 4, -6]

// function bubbleSort(arr) {
//   let swapped

//   do {
//     swapped = false
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i]
//           arr[i] = arr[j]
//           arr[j] = temp

//           swapped = true
//         }
//       }
//     }
//   } while (swapped);
// }

// bubbleSort(arr)
// console.log(arr);

// function insertionSort(arr){

//   for( let i=1;i<arr.length;i++){
//       let curr = arr[i]
//       let j = i-1
//       while(j>=0 && arr[j] > curr){
//          arr[j+1] = arr[j]
//          j--
//       }
//       arr[j+1] = curr
//   }
// }


// insertionSort(arr)
// console.log(arr);

// function selectionSort(arr) {
//   let min
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }

//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp

//   }
//   return arr
// }


// function selectionSort(arr) {
//   let min
//   for (let i = 0; i < arr.length - 1; i++) {
//     min = i
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[min]) {
//            min=j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp
//   }
//   return arr
// }

// selectionSort(arr)
// console.log(arr);



// function quickSort( arr){
  
//   if (arr.length < 2) {
//     return arr  
//   }

//   let pivot = arr[arr.length-1]
//   let left = []
//   let right = []
//   for( let i=0 ; i<arr.length-1 ; i++){
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       }else{
//         right.push(arr[i])
//       }
//   }
//   return [...quickSort(left) , pivot , ...quickSort(right)]
// }

// console.log(quickSort(arr));

// function mergeSort(arr){
  
//   if (arr.length < 2) {
//     return arr
//   }

//   let mid  = Math.floor(arr.length/2)
//   let leftArr = arr.slice(0,mid)
//   let rightArr = arr.slice(mid)

//   return merge(mergeSort(leftArr) , mergeSort(rightArr))
// }

// function merge( leftArr, rightArr ){
//     let sortedArr = []

//   while (leftArr.length && rightArr.length) {
//       if (leftArr[0] < rightArr[0]) {
//         sortedArr.push(leftArr.shift())
//       }else{
//         sortedArr.push(rightArr.shift())
//       }
//   }
//   return [...sortedArr,...leftArr,...rightArr]
// }

// console.log(mergeSort(arr));
// class Stack {
//   constructor(){
//     this.items = []
//   }
//   isEmpty(){
//     return this.items.length ===0 
//   }
//   push(element){
//     this.items.push(element)
//   }
//   pop(){
//    return this.items.pop()
//   }
//   display(){
//     console.log(this.items);
//   }
//   removeMid(){
//     let mid = Math.floor(this.items.length/2)
//     let tempstack = new Stack()

//     for(let i=0;i<mid;i++){
//        tempstack.push(this.pop())
//     }
//     this.pop()
//     while (!tempstack.isEmpty()) {
//         this.push(tempstack.pop())
//     }
//   }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.removeMid()
// stack.display()



