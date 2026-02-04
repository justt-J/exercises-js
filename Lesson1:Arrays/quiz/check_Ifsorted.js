// Check if Sorted

// Return true if the array is strictly increasing.

function isSorted(arr) {
    let prev = arr[0] 
    for(let i = 1; i < arr.length; i++){
        if(prev > arr[i] || prev === arr[i]) return false
        prev = arr[i]
    }
    return true
}

console.log(isSorted([1,2,3]))
console.log(isSorted([1,1,2]))