// Second Largest

// Return the second largest number in the array.

function secondLargest(arr) {
    let target = arr[0]
    for (let i = 0; i < arr.length; i++) {
        target = target < arr[i] ? arr[i] : target;
    }
}

console.log(secondLargest([5,2,9,1]))

// function secondLargest(arr) {
//     let target = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         target = target < arr[i] ? arr[i] : target;
//     }
//     arr.splice(arr.indexOf(target),1)
//     target = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         target = target < arr[i] ? arr[i] : target;
//     }
//     return target
// }