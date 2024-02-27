const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);

  // when function completes, execute within then block
  // execute all statements that start after promise
  // we can define functions to run async by returning a promise or we can use defined apis that return promises
  // return promise outside of main thread
  fetchPromise.then((response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  
  console.log("Started request…");
  