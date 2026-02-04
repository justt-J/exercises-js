// Reverse an Array (Without reverse())
// Return a new array that is the reverse of the input.

function reverseArray(arr) {
    let length = arr.length - 1 
    let new_arr = []
    for(let i = 0; i < arr.length; i++){
        new_arr[i] = arr[length]
        length--
    }
    console.log(new_arr)
}

reverseArray([1,2,3]) //→ [3,2,1]
