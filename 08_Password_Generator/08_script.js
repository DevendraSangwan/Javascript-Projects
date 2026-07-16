const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?><:{}[]";
document.getElementById("generateBtn").addEventListener("click",generatePassword);
document.getElementById("copyBtn").addEventListener("click",copyPassword);
function generatePassword(){
let length=Number(document.getElementById("length").value);
if(document.getElementById("length").value===""){
alert("Please enter password length.");
return;
}
if(length<4||length>30){
alert("Password length must be between 4 and 30.");
return;
}
let password="";
for(let i=0;i<length;i++){
let randomIndex=Math.floor(Math.random()*characters.length);
password+=characters[randomIndex];
}
document.getElementById("password").value=password;
document.getElementById("length").value="";
document.getElementById("length").focus();
}

function copyPassword(){
let password=document.getElementById("password").value;
if(password===""){
alert("Generate a password first.");
return;
}

navigator.clipboard.writeText(password);
alert("Password copied successfully.");
}