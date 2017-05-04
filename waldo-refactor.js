// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach (function callback(currentValue, i) {
    if (currentValue === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at Index", i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);