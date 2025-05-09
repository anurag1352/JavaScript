// let arr = [1,2,3,4,5];

// arr.forEach( (el) => {
//     console.log(el);
// });

// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function(el) {
//     console.log(el);
// }

// arr.forEach(print);

let arr = [
  {
    name: "anurag",
    marks: 96,
  },
  {
    name: "abc",
    marks: 78,
  },
  {
    name: "xyz",
    marks: 37,
  },
];

arr.forEach((student) => {
    console.log(student.marks);
});