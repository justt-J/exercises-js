// Second Largest
// Return the second largest number in the array.

function secondLargest(arr) {
    let target = arr[0]
    let target_1 = 0
    for (let i = 0; i < arr.length; i++) {
        target = target < arr[i] ? arr[i] : target;
    }
    return target_1
}

console.log(secondLargest([5,2,9,1]))