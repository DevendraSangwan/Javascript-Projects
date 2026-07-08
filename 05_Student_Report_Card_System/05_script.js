document.getElementById("generateBtn").addEventListener("click", generateReport);
function generateReport(){
    let name=document.getElementById("studentName").value.trim();
    let marks=[
        Number(document.getElementById("math").value),
        Number(document.getElementById("science").value),
        Number(document.getElementById("english").value),
        Number(document.getElementById("computer").value),
        Number(document.getElementById("hindi").value)
    ];
    let subjects=[
        "Math",
        "Science",
        "English",
        "Computer",
        "Hindi"
    ];
    //validations
    if(name===""){
        alert("Please enter student name.");
        return;
    }
    for(let i=0;i<marks.length;i++){
        if(isNaN(marks[i])){
            alert(`Enter marks for ${subjects[i]}.`);
            return;
        }
        if(marks[i]<0 || marks[i]>100){
            alert(`${subjects[i]} marks must be between 0 and 100.`);
            return;
        }
    }

    let total=0;
    for(let i=0;i<marks.length;i++){
        total+=marks[i];
    }

    let percentage=(total/500)*100;
    let grade;
    if(percentage>=90){
        grade="A+";
    }else if(percentage>=80){
        grade="A";
    }else if(percentage>=70){
        grade="B";
    }else if(percentage>=60){
        grade="C";
    }else if(percentage>=40){
        grade="D";
    }else{
        grade="F";
    }
    let result;
    if(percentage>=40){
        result="✅ PASS";
    }else{
        result="❌ FAIL";
    }

    let student={
        name:name,
        marks:marks,
        total:total,
        percentage:percentage.toFixed(2),
        grade:grade,
        result:result
    };

    let output=`
    <h2>Student Report Card</h2>
    <table>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
    `;

    for(let i=0;i<subjects.length;i++){
        output+=`
        <tr>
            <td>${subjects[i]}</td>
            <td>${student.marks[i]}</td>
        </tr>
        `;
    }
    
    output+=`
    </table>
    <br>
    <p><strong>Name :</strong> ${student.name}</p>
    <p><strong>Total :</strong> ${student.total} / 500</p>
    <p><strong>Percentage :</strong> ${student.percentage}%</p>
    <p><strong>Grade :</strong> ${student.grade}</p>
    <p><strong>Result :</strong> ${student.result}</p>
    `;
    document.getElementById("output").innerHTML=output;
    document.getElementById("studentName").value="";
    document.getElementById("math").value="";
    document.getElementById("science").value="";
    document.getElementById("english").value="";
    document.getElementById("computer").value="";
    document.getElementById("hindi").value="";
    document.getElementById("studentName").focus();
}