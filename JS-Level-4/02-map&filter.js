//map function
let num = [1,2,3,4];

let double = num.map((el) => {
    return el * el;
});

console.log(double);

let students = [
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

  let gpa = students.map((el) => {
    return el.marks / 10;
  });

  console.log(gpa);


  //filter function.
  let nums = [2,3,1,4,5,6,7,8,9,2,0,-9];

  let even = nums.filter((el) => {
    // return el % 2 ==0; //even -> true, odd-> false.
    return el < 5;
  });
  console.log(even);
