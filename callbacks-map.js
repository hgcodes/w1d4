var myArray = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

function myAge (arr, birthYear) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var add = arr[i];
    result.push(birthYear(add));
  }
  return result;
}

console.log(myAge(myArray, function(add) {
  return add - 1989;
}));