// Subarray Sum
// Return true if there exists a contiguous subarray whose sum is target.

function getSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
    }
    return sum
}

function hasSubarraySum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasSubarraySum([8, 1, 2], 8));        // true
console.log(hasSubarraySum([1, 12, -9, 4], 8));   // true (12 + -9 + 4 + 1 doesn't matter; correct contiguous check)
console.log(hasSubarraySum([5, 6, -3], 8));       // true (5 + 6 - 3)
console.log(hasSubarraySum([1,2,3,4], 20));       // false