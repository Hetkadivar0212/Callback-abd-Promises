function doubleArray(arr, callback) {
    const doubledArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(callback(arr[i]));
    }
  
    return doubledArray;
  }
  
  function double(num) {
    return num * 2;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleArray(inputArray, double);
  console.log(doubledArray);