

//here is the Sample Of recursion
function Sample(person){
  if(person === 5) return true
    console.log(person);
    return Sample(person+1)
}
console.log(go(1))



// multiple of array numbers
function multiply(arr) {
    if (arr.length <= 0) {
      return 1
    }else return arr[arr.length-1] * (multiply(arr.slice(0,arr.length-1)))
}
console.log(multiply([1,2,3,4]));



// factorial
function factorial(n){
   if(n===0){
    return 1
   }else return n* factorial(n-1)
}
console.log(factorial(5));


//range of given n number
function rangeOfnumbers(start , end ){
  if (end < start ) {
    return []
  }else {
    const numbers = rangeOfnumbers(start , end-1)
     numbers.push(end)
     return numbers
  }
}

console.log(rangeOfnumbers(0,5));

// reverse a string
function reversStr(str){
  if (str === "") {
    return ""
  }else{
    console.log();
     return reversStr(str.substr(1)) + str.charAt(0)
  }
}

console.log(reversStr('hello'));




