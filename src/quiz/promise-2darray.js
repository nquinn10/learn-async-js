// any function that returns a promise will run async
// when execution of async function completes, resolve the promise - pending to fufilled and triggers then block
// if error, triggers catch block
// when we want function to be async, we have to return a promise from it
// Console.logs occur synchronously in main thread

function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) { // executes async in worker thread
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);
sumPromise1
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

const sumPromise2 = sum2DArray('array2D');
sumPromise2
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
