// Subarray Sum
// Return true if there exists a contiguous subarray whose sum is target.

function hasSubarraySum(arr, target) {
    for(let i=0; i < arr.length; i++){
        let current_value = arr[i]
        if(current_value === target){
            return true
        }
        for(let j = i + 1; j < arr.length; j++){

            if ((current_value + arr[j]) === target){
                return true
            }else if ((current_value + arr[j]) < target){
                current_value = current_value + arr[j]
            }else{
                return false
            }
        }
    }
    return false
}
console.log(hasSubarraySum([8, 1, 2, 3, 2], 8))
console.log(hasSubarraySum([1, 12, -9, 4], 8))
console.log(hasSubarraySum([5, 6, -3], 8))