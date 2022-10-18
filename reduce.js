//const marks =[10,15,19];
//const sum = marks.reduce((prev,cur)=>prev+cur);
//console.log(sum);

//array of an object

//Calculate the total salary given to employees

const employees = [
    {
        name:"Babita",
        age:20,
        post:"Frontend",
        salary:1000
    },
    {
        name:"Arjun",
        age:23,
        post:"Backend",
        salary:1500
    },
    {
        name:"Bibek",
        age:25,
        post:"Frontend",
        salary:1500
    },
];
const totalSalary = employees.reduce((prev,cur)=>{
   return {salary:prev.salary+cur.salary};
})
console.log(totalSalary);