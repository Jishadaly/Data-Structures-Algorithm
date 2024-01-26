
// this is the normal code for search  a data in an array

const arr =[4 , 6 , 4 ,  0, 8]
const target=10;

function returnArray(arr,target){
    const result =[];
  for ( let i=0; i< arr.length ; i++){
    for(let j=1; j<arr.length-1 ; j++){
      if (arr[i] + arr[j] === target) {
        console.log();
        result.push(arr[i],arr[j]);
        return result
      }
    }
  }
  return result;
}



function TwoNumberSum(arr , target){
    const numset = new Set();

    for ( let i=0 ; i<arr.length ; i++){


      const complement = target - arr[i];

      if (numset.has(complement)) {
        
         return [complement , arr[i]]
      }
      numset.add(arr[i]);
    }
    return []
}



const value = TwoNumberSum(arr,target);

console.log(value);