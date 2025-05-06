//Sol.1
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//Sol.2
const car = {
    name: "Alto Lxi",
    model: 2010,
    color: "z-black"
};
console.log(car);
console.log("Toy : ",car.name);

//Sol3.
const person = {
    name: "John deo",
    age: 35,
    city: "New jersey"
}
console.log("before edit: ",person);

person.city = "New York";
person.country = "United States";
console.log("after edit : ",person);