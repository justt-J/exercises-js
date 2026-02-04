// Two Sum (Brute Force Version)

// Return true if any two numbers sum to target.

function twoSumExists(arr, target) {
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if ((arr[i] + arr[j]) === target) return true
        }
    }
    return false
}

console.log(twoSumExists([1,4,6,2], 2))
