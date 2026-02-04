function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return "element does not exist";
}

array = [4,7,9]
target_element = 1
result = findIndex(array, target_element)

console.log(result); // 1