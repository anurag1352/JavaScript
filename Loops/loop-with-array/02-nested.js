let heros = [ ["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"] ,[]];

for(let i=0; i<heros.length; i++){
    console.log(i,`List #${i}`,heros[i].length);
    for(let j=0; j<heros[i].length;
        j++
    ){
        console.log(heros[i][j]);
    }
}


let student = [["anurag",98], ["angel",99.5], ["karan",77]];

for (let i=0; i<student.length; i++) {
    console.log(i,student[i],student.length)
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}