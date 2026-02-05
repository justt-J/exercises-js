// Move Zeros to End
// Modify array so all 0s are moved to the end while preserving order of others.


function moveZeros(arr) {
    let arr_zero = []
    let j = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr_zero[j] = arr[i]
            arr.splice(arr.indexOf(arr[i]),1)
            j++
        }
    }
    for(let i = 0; i < arr_zero.length; i++){
        arr.push(arr_zero[i])
    }
    console.log(arr)
}

moveZeros([0,1,0,3,12]) //→ [1,3,12,0,0]
