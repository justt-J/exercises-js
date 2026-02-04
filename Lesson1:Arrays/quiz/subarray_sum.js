// Subarray Sum
// Return true if there exists a contiguous subarray whose sum is target.

function hasSubarraySum(arr, target) {
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if ((arr[i] + arr[j]) === target) return true
        }
    }
    return false
}
hasSubarraySum([1,2,3,7], 6) //→ true   // [1,2,3]