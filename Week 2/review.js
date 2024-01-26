

let nums =[1,1,2,3,4,4]

let newArr = [...new Set(nums)]
console.log(newArr);



let str = "aajgjardfaaabbbbbbbbbbbbfrdaaaaaaa";
let maxSubstring = '';
let currentSubstring = '';

for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
        currentSubstring += str[i]; 
    } else {
        currentSubstring = str[i]; 
    }
    if (currentSubstring.length > maxSubstring.length) {
        maxSubstring = currentSubstring; 
    }
}

console.log(maxSubstring); 




