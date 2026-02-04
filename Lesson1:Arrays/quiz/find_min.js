// Find the minimum
// Write a function that returns the minimum number in an array.

function findMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        max = max < arr[i] ? max : arr[i];
    }
    console.log(max)
}

// findMax([300, 5, 7, 100]);
findMax([-1, -50, -3]);
