// function insertionSort(arr) { 
//   for (i = 1; i < arr.length; i++){
//       let current = arr[i]
//       let j= i-1
//       while ( j>=0 && arr[j] > current) {
//          arr[j+1] = arr[j]

//          j--
//       }
//       arr[j+1] = current
//    }
// }



// function insertionSort(arr) {

//   for( i = 1 ; i<arr.length ; i++){
//       let current = i
//       let j = i-1

//       while (j>= 0 && arr[j] > current) {
//            arr[j+1] = arr[j]

//            j--
//       }
//       arr[j+1] = current
//   }

// }


//  function insertionSort(arr){
  
//   for(i=1 ; i<arr.length; i++){

//     let current = arr[i]
//     let j = i-1

//     while(j>=0 && arr[j]> current){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = current
//   }

//  }

const arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr);


// function insertionSort(arr) {
//    for(let i=0 ; i<arr.length;i++){
//     let curr = arr[i]
//     let j=i-1
//     while(j>=0 && arr[j] > curr){
//       arr[j+1] = arr[j]
//       j--
//     }
//     arr[j+1] = curr
//    }
// }

// function insertionSort(arr){
   
//   for(i=1 ; i<arr.length;i++){
//      let current =arr[i] 
//      let j=i-1
//       while(j>=0 && arr[j] > current){
//            arr[j+1] = arr[j]
//            j--
//       }

//       arr[j+1] = current
//     }
// }

function insertionSort(arr){
   for(let i=0;i<arr.length ; i++){
      let numToInsert = arr[i]
      let j = i-1

      while( j>=0 && arr[j] > numToInsert){
         arr[j+1] = arr[j]

         j--
      }
      arr[j+1] = numToInsert
   }
}