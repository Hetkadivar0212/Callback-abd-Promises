function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
  
    return logString;
  }
  
  // Example usage:
  const inputString = "hello, world!";
  const logFunction = manipulateString(inputString);
  logFunction(); 