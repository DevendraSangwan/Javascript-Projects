let registeredUser={};
document.getElementById("showPassword").addEventListener("change",function(){
let password=document.getElementById("password");
password.type=this.checked?"text":"password";
});

document.getElementById("registerBtn").addEventListener("click",registerUser);
document.getElementById("loginBtn").addEventListener("click",loginUser);

function registerUser(){
let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value.trim();
let output=document.getElementById("output");

if(name===""){
alert("Please enter your name.");
return;
}

if(email===""){
alert("Please enter your email.");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Please enter a valid email.");
return;
}

if(password===""){
alert("Please enter your password.");
return;
}

if(password.length<6){
alert("Password must be at least 6 characters.");
return;
}

registeredUser={
name:name,
email:email,
password:password
};
output.innerHTML="✅ Registration Successful.";
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("password").value="";
document.getElementById("showPassword").checked=false;
document.getElementById("password").type="password";
}

function loginUser(){
let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value.trim();
let output=document.getElementById("output");

if(email===""){
alert("Please enter your email.");
return;
}

if(password===""){
alert("Please enter your password.");
return;
}
if(email===registeredUser.email&&password===registeredUser.password){
output.innerHTML=`✅ Welcome ${registeredUser.name}`;
}
else{
output.innerHTML="❌ Invalid Email or Password.";}

document.getElementById("email").value="";
document.getElementById("password").value="";
document.getElementById("showPassword").checked=false;
document.getElementById("password").type="password";
document.getElementById("email").focus();
}