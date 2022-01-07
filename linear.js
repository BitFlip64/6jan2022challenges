function x(char, arr){
  let nums = []; 
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === char) {
      nums.push(i);
    }
  }
  return nums;
}

console.log(x('a','banannnzzz_ a'))