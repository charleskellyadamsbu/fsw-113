var students = [
    { name: "John", city: "California"},
    { name: "Peter", city: "London" },
    { name: "Mathew", city: "Manchester" },
    { name: "Jane", city: "Phoenix" }
]

students.forEach(element => console.log(element));

students[0].dateOfBirth = "10/10/10", students[1].dateOfBirth = "10/10/11", students[2].dateOfBirth = "10/10/12", students[3].dateOfBirth = "10/10/13";
students[0].state = "California", students[1].state = "United Kingdom", students[2].state = "United Kingdom", students[3].state = "Arizona";
students[0].payRate = "$12.00/hour", students[1].payRate = "$14.00/hour", students[2].payRate = "$20.00/hour", students[3].payRate = "$11.00/hour";
students.forEach(element => console.log(element));

const gradStudents = [
    { name: "John", city: "California"},
    { name: "Peter", city: "London" },
    { name: "Mathew", city: "Manchester" },
    { name: "Jane", city: "Phoenix" }
]

gradStudents.forEach(element => console.log(element));

students[0].dateOfBirth = "10/10/10", students[1].dateOfBirth = "10/10/11", students[2].dateOfBirth = "10/10/12", students[3].dateOfBirth = "10/10/13";
students[0].state = "California", students[1].state = "United Kingdom", students[2].state = "United Kingdom", students[3].state = "Arizona";
students[0].payRate = "$12.00/hour", students[1].payRate = "$14.00/hour", students[2].payRate = "$20.00/hour", students[3].payRate = "$11.00/hour";

gradStudents.forEach(element => console.log(element));

/* My expectation is no data will be added because const won't allow you to modify data.
*  The output was the same as my expectation.
*/

const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplication = [1, 2, 3, 4];
const tableStart = 1;
const tableEnd = 12;
const table = [];

for(let i = 0; i < tableEnd; i++) {
    table.push( {"name": i + 1} );
    let data = [];
    for(let k = 0; k < multiplication.length; k++) {
        data.push({[k + 1]: multipliers[i] + " x " + multiplication[k] + " = " + multipliers[i] * multiplication[k]});
    }
    table[i].values = data;
}

table.forEach(element => console.log(element));