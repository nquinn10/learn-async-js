const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

// chain of then blocks but not nested
// once fetch is complete, invokes first then block
// retrieves response from json - async call
// return occurs in next then block and is processed there
// chaining then blocks sequentially
// promise api allows us to execute some piece of code asynchronously and
// allows us to chain promises, especially if promises depend on each other

  fetchPromise
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  