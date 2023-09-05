function getInput() {
  return new Promise((resolve, reject) => {
    const input = prompt("Please enter a value:");
    if (input) {
      resolve(input);
    } else {
      reject("No input provided");
    }
  });
}

function asyncFunction(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = value.toUpperCase();
      resolve(result);
    }, 1000);
  });
}

getInput()
  .then((input) => {
    console.log(`Input received: ${input}`);
    return asyncFunction(input);
  })
  .then((result) => {
    console.log(`Async function result: ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });