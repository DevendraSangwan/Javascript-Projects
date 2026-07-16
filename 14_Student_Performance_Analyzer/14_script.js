const students=[
{
id:1,
name:"Rahul",
marks:95,
grade:"A"
},
{
id:2,
name:"Priya",
marks:88,
grade:"B"
},
{
id:3,
name:"Aman",
marks:72,
grade:"C"
},
{
id:4,
name:"Neha",
marks:60,
grade:"D"
},
{
id:5,
name:"Rohit",
marks:40,
grade:"F"
},
{
id:6,
name:"Anjali",
marks:98,
grade:"A"
},
{
id:7,
name:"Karan",
marks:82,
grade:"B"
},
{
id:8,
name:"Simran",
marks:75,
grade:"C"
},
{
id:9,
name:"Arjun",
marks:67,
grade:"D"
},
{
id:10,
name:"Meera",
marks:91,
grade:"A"
}
];

const minMarks=document.getElementById("minMarks");
const gradeFilter=document.getElementById("gradeFilter");
minMarks.addEventListener("input",displayStudents);
gradeFilter.addEventListener("change",displayStudents);
displayStudents();

function displayStudents(){
let minimum=Number(minMarks.value)||0;
let selectedGrade=gradeFilter.value;
let filteredStudents=students.filter(student=>{
let marksMatch=student.marks>=minimum;
let gradeMatch=selectedGrade==="All"||student.grade===selectedGrade;
return marksMatch&&gradeMatch;
});

let average=0;

if(filteredStudents.length>0){
average=filteredStudents.reduce((total,student)=>{
return total+student.marks;
},0)/filteredStudents.length;
}

let highest=0;

if(filteredStudents.length>0){
highest=filteredStudents.reduce((max,student)=>{
return student.marks>max?student.marks:max;
},filteredStudents[0].marks);
}

document.getElementById("average").innerHTML=average.toFixed(2);
document.getElementById("highest").innerHTML=highest;
let output=filteredStudents.map(student=>{
const{id,name,marks,grade}=student;

return`
<div class="card">
<h3>${name}</h3>
<p><strong>ID :</strong> ${id}</p>
<p><strong>Marks :</strong> ${marks}</p>
<p><strong>Grade :</strong> ${grade}</p>
</div>
`;
}).join("");

if(filteredStudents.length===0){
output="<h2>No Students Found.</h2>";
}
document.getElementById("students").innerHTML=output;
}