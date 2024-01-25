// function bubbleSort(arr) {

//   let swapped
//   do {
//     swapped = false
//     for (i = 0; i < arr.length; i++) {

//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
  
//         swapped = true
//       }
//     }
//   } while (swapped);


// }

// function bubbleSort(arr){
//    let swapped
//    do {
//     swapped = false
//     for(i=0 ;i<arr.length ;i++){
//        if (arr[i] > arr[i+1]) {
//            let temp = arr[i+1]
//            arr[i+1] =  arr[i]
//            arr[i] = temp

//            swapped = true
//        } 
//       }
//    }while (swapped)
//   }
  
 const arr = [-6,8,-2,5,3];

// function bubbleSort(arr){
//     let swapped 
//     do{
//       swapped = false
//       for( i=0 ; i<arr.length ; i++){
//           if(arr[i] > arr[i+1]){
//               let temp = arr[i]
//               arr[i] = arr[i+1]
//               arr[i+1] = temp

//               swapped = true
//           }
//       }
      
//     }while(swapped)
    
// }

// function bubbleSort(arr){
     
//     let swapped 
//     do{
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }


 



function bubbleSort (arr){
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i] > arr[i+1]){

                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp

                swapped = true
            }
        }  
    }while (swapped);
}

bubbleSort(arr)
console.log(arr);