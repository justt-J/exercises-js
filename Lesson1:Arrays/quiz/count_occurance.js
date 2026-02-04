// Count Occurrences

// Return how many times a target appears in the array.
// countOccurrences([1,2,2,3,2], 2) → 3

function countOccurrences(arr, target){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]){
            count++
        }
    }
    console.log(count)
}

countOccurrences([1,2,2,3], 2)


