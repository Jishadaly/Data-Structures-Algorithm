// const str = "aajgjardfaaabbbbbbbbbbbbfrdaaaaaaa"

//   function longest(str){

//     let count ;

//     for( let i=0 ;i<str.length;i++){
//         if (str.charAt(i) === str.charAt(i)) {
            
//         }
//     }

//   }


//   longest(str);



// function removeDup(arr){
  
//   const newarr = arr.forEach(element => {
//      return  element === element ? arr.slice(element) 
//   });

// }



// let arr = [1,5,9,1,5,1];
// console.log(removeDup(arr));



// secendLast(){
//    if (this.empty ()) {
//     return null
//    }else{
      
//  }

// let nums =[1,1,2,3,4,4]
let nums =[1,1,1,1,1,1,2,2,2,1,2,3,4,4,5,2,2,2,2,2,2,1,11,4,2,2,5,2,2,2,2,4,4,4]

// let unique = new Set(nums)
// console.log(unique);

// instead of this 



let newArr = [...new Set(nums)]
console.log(newArr);


// for( let i=0;i<nums.length-1;i++){
//      for(let j=i+1;j<nums.length;j++){
//        if (nums[i] === nums[j]) {
//           nums.splice(j-1,1)
//           i--
//        }
//      }
// }

// console.log(nums);



