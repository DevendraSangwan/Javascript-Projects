const API_KEY = process.env.API_KEY;
const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

document.getElementById("explainBtn").addEventListener("click",explainCode);
async function explainCode(){
let code=document.getElementById("codeInput").value.trim();
let output=document.getElementById("output");
if(code===""){
alert("Please paste some code.");
return;
}

output.innerHTML="⏳ Generating explanation...";
try{
const response=await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:`Explain the following code in very simple English:\n\n${code}`
}
]
}
]
})
});

if(!response.ok){
throw new Error("Failed to fetch response.");
}
const data=await response.json();
const explanation=data.candidates?.[0]?.content?.parts?.[0]?.text;
if(explanation){
output.innerHTML=`
<h2>📖 Explanation</h2>
<p>${explanation.replace(/\n/g,"<br>")}</p>
`;
}
else{
output.innerHTML="❌ No explanation received.";
}
}

catch(error){
output.innerHTML=`❌ Error : ${error.message}`;
}
}