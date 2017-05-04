var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  // var nameA = a.name;
  // var nameB = b.name;
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // names are equal, then compare ages
  if (a.name === b.name) {
    return b.age - a.age;
    }// compare 2 ages
    // var ageA = a.age;
    // var ageB = b.age;
  // if (ageA < ageB) {
  //   return 1;
  // }
  // if (ageA > ageB) {
  //   return -1;
  // }
  return 0;

});


console.log(students);