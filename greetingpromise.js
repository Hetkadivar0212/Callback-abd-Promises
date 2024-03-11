function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (!name) {
        reject("Name is required!");
      } else {
        resolve(`Hello, ${name}!`);
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  greetWithPromise(name)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });  