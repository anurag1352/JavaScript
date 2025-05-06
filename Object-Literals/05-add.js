const student = {
    name: "anurag",
    age: 20,
    marks: 89,
    city: "Noida"
}
console.log(student);

student.city = "Pune";
console.log(student);

student.gender = "Male";
console.log(student);

delete student.age;
console.log(student);