let transactions=JSON.parse(localStorage.getItem("transactions"))||[];
document.getElementById("addBtn").addEventListener("click",addTransaction);
displayTransactions();
function addTransaction(){
let description=document.getElementById("description").value.trim();
let amount=Number(document.getElementById("amount").value);
let type=document.getElementById("type").value;

if(description===""){
alert("Please enter description.");
return;
}

if(document.getElementById("amount").value===""){
alert("Please enter amount.");
return;
}

if(amount<=0){
alert("Amount must be greater than 0.");
return;
}

if(type===""){
alert("Please select transaction type.");
return;
}

let transaction={
description:description,
amount:amount,
type:type
};

transactions.push(transaction);
localStorage.setItem("transactions",JSON.stringify(transactions));
displayTransactions();
document.getElementById("description").value="";
document.getElementById("amount").value="";
document.getElementById("type").value="";
document.getElementById("description").focus();
}

function displayTransactions(){
let transactionList=document.getElementById("transactionList");
transactionList.innerHTML="";
let totalIncome=0;
let totalExpense=0;

if(transactions.length===0){
transactionList.innerHTML="<h3>No Transactions Found.</h3>";
}

for(let i=0;i<transactions.length;i++){
if(transactions[i].type==="Income"){
totalIncome+=transactions[i].amount;
}else{
totalExpense+=transactions[i].amount;
}

transactionList.innerHTML+=`
<div class="transaction">
<div>
<h3>${transactions[i].description}</h3>
<p>${transactions[i].type} : ₹${transactions[i].amount}</p>
</div>
<button onclick="deleteTransaction(${i})">Delete</button>
</div>
`;
}

let balance=totalIncome-totalExpense;
document.getElementById("income").innerHTML=`₹${totalIncome}`;
document.getElementById("expense").innerHTML=`₹${totalExpense}`;
document.getElementById("balance").innerHTML=`₹${balance}`;
}

function deleteTransaction(index){
let confirmDelete=confirm("Are you sure you want to delete this transaction?");

if(!confirmDelete){
return;
}

transactions.splice(index,1);
localStorage.setItem("transactions",JSON.stringify(transactions));
displayTransactions();
}