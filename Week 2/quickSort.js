

// function quickSort(arr){

//   if (arr.length < 2) {
//     return arr
//   }

//   let pivot = arr[arr.length-1]
//   let left  = []
//   let right = []

//   for( let i=0 ; i<arr.length -1 ; i++){
//     if (arr[i]<pivot) {
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot, ...quickSort(right)]
// }


// function quickSort(arr) {
//       if(arr.length < 2){
//         return arr
//       }
//   let pivot = arr[arr.length-1]
//   let right = []
//   let left = []

//   for (i = 0; i < arr.length -1 ; i++)

//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }

//   return [...quickSort(left), pivot , ...quickSort(right)]
// }


// function quickSort(arr) {

//   if (arr.length < 2) {
//     return arr
//   }

//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot, quickSort(right)]
// }


const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr));

// function quickSort(arr) {

//   if (arr.length < 2) {
//     return arr
//   }

//   let pivot = arr[arr.length - 1]
//   let right = []
//   let left = []

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)]
// }

// function quickSort(arr){

//   if (arr.length < 2) {
//      return arr
//   }
//    let pivot = arr[arr.length-1]
//    let left = []
//    let right = []
//    for(let i=0;i<arr.length-1;i++){
//     if (arr[i] > pivot) {
//       right.push(arr[i])
//     }else{
//       left.push(arr[i])
//     }
//    }
//    return [...quickSort(left),pivot,...quickSort(right)]
// }


// function quickSort(arr){
//      if(arr. length <2){
//       return arr
//      }
//   let pivot = arr[arr.length-1]
//   let right = []
//   let left = []

//   for(let i=0;i<arr.length-1; i++){
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       }else{
//         right.push(arr[i])
//       }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }

// function quickSort(arr){

//   if( arr.length < 2){
//     return arr
//   }
   
//   let pivot = arr[arr.length-1]
//   let leftArr= []
//   let rightArr = []

//   for(let i=0 ;i<arr.length -1;i++){
//      if (arr[i] < pivot) {
//       leftArr.push(arr[i])
//      }else{
//       rightArr.push(arr[i])
//      }
//   }

//   return [...quickSort(leftArr),pivot,quickSort(rightArr)]
// }


function quickSort(arr){

  if( arr.length < 2){

  }

  let pivot = arr[arr.length -1]
  let leftArr = []
  let rightArr = []
  for(let i=0;i<arr.length -1;i++){
    if(arr[i] < pivot){
      leftArr.push(arr[i])
    }else{
      leftArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
  
}