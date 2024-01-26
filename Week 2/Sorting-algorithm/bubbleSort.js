function bubbleSort(arr) {

    let swapped
    do {
        swapped = false
        for (i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp

                swapped = true
            }
        }
    } while (swapped);


}
