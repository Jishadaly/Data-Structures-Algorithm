const selectionSort = (arr) => {
    let n = arr.length;
    let min;
    for (let i = 0; i < n - 1; i++) {
        min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }
    return arr
}


