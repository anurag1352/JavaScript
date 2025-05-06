let classInfo = {
    anurag: {
        grade: "A+",
        city: "Pune"
    },
    angel: {
        grade: "A",
        city: "Hyderabad"
    },
    aman: {
        grade: "O",
        city: "Delhi"
    }
}
console.log(classInfo);

classInfo.angel.city = "Chandigarh";
console.log(classInfo.angel); 

console.log(classInfo.anurag.grade);