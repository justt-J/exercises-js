// First Index of Target

// Return the index of the first occurrence of target, or -1.

function findFirstIndex(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]){
            return i
        }
    }
    return -1
}

console.log(findFirstIndex([5,3,7,3,8,8,8,], 3)) //→ 1
