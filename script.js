function updateElementWithHelloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Call the function and update the HTML element
updateElementWithHelloWorld()
  .then((message) => {
    const element = document.getElementById('output');
    element.textContent = message;
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

