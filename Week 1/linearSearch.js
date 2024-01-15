const arr = [5, 3, 9, 11, 6, 2];
const value = 11;



function linearSearch(arr,value) {
  
  for(let i=0; i<arr.length; i++){
    if (arr[i]===value) {
      return i+1
    }
  }
  return -1

}

const result = linearSearch(arr,value)
console.log(result);
