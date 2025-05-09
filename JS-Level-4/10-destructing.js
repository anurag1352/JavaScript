let names = ["tony", "bruce", "steve", "peter", "abc", "xyz", "pyq"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup,others);

//destructing on objects.
const student = {
    name: "anurag",
    age: 20,
    class: "BCA",
    subjects: ["dsa", "st", "CG","math"],
    userName: "anurag@123",
    password: "abcd",
    city: "Pune"
};

let {userName: user, password, city:place = "mumbai", ...other} = student;
 console.log(user, password,place,other);