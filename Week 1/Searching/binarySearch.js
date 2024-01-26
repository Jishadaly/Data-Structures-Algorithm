

function binarySearch(arr,target){
     
    let leftIdx = 0
    let rightIdx = arr.length-1

    while (leftIdx <= rightIdx) {
        let mid = Math.floor(( leftIdx + rightIdx )/2)

        if (target === arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            rightIdx = mid -1
        }else{
            leftIdx = mid +1
        }
    }
    return -1

}
console.log(binarySearch([1, 2, 3, 4,5, 6], 4));