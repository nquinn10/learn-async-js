const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// take fetch response and call JSON
// JSON gives us promise - executes call async on worker thread
// jsonPromise.then - logs products
// similar to callback hell problem
// json promise depends on fetch.promise completing
// promise api allows us to chain more elgantly
fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((products) => {
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... ');

// whole script executes, ones response is received, Fetching products... then executes
