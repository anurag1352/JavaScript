const student = {
    name: "anurag",
    age: 20,
    eng: 88,
    phy: 70,
    math: 65,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.phy + this.math ) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

console.log(student.getAvg());