// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch (sortedArr, key){
    sortedArr.sort((a, b) => a - b)
    let start = 0;
    let end = sortedArr.length - 1;
    return binarySearchRun(sortedArr, key, start, end);
}
const binarySearchRun = (sortedArr, key, start, end) =>{
    let middle = Math.round((start + end) / 2);
    if (end < start){
        return -1;
    }else if (key === sortedArr[middle]){
        return middle;
    }else if (key < sortedArr[middle]){
        return binarySearchRun(sortedArr, key, start, middle - 1);
    } else if (key > sortedArr[middle]){
        return binarySearchRun(sortedArr, key, middle + 1, end);
    }
}



    /*while (start <= end) {                            don't pass 2 tests
        let middle = Math.floor((start + end) / 2);    
        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}*/

module.exports = binarySearch