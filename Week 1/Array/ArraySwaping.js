
// normal swaping

let arr = [6, 2, 3, 6, 8, 9, 1];
const target = 6;

function swap(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = target;
  }
}

swap(arr, target);
console.log(arr);


