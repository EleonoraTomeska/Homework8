//Exercise 4
function average (students){
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    let average = sum / students.length;
    return average;
}

const students = [
    { name: "Ana", grade: 10},
    { name: "Jan", grade: 8},
    { name: "Emi", grade: 9},
]

let avg = average(students);
console.log("Average = " + avg);