let expenses = [];
document.getElementById("addExpense").addEventListener("click", addExpense);

function addExpense(){
    let name = document.getElementById("expenseName").value.trim();
    let price = Number(document.getElementById("expensePrice").value);
    if(name===""){
        alert("Enter Expense Name");
        return;
    }
    if(isNaN(price) || price<=0){
        alert("Enter Valid Amount");
        return;
    }
    expenses.push({
        name:name,
        price:price
    });
    document.getElementById("expenseName").value="";
    document.getElementById("expensePrice").value="";
    displayExpenses();
}

function displayExpenses(){
    let list=document.getElementById("expenseList");
    let summary=document.getElementById("summary");
    list.innerHTML="";
    let total=0;
    let highest=expenses[0];
    for(let i=0;i<expenses.length;i++){
        total+=expenses[i].price;
        if(expenses[i].price>highest.price){
            highest=expenses[i];
        }
        list.innerHTML+=`
        <div class="expense">
            <span>${expenses[i].name} - ₹${expenses[i].price}</span>
            <button class="delete" onclick="deleteExpense(${i})">
            Delete
            </button>
        </div>
        `;
    }
    summary.innerHTML=`
    <h3>Total Expense : ₹${total}</h3>
    <h3>Most Expensive : ${highest.name} (₹${highest.price})</h3>
    <h3>Total Items : ${expenses.length}</h3>
    `;
}

function deleteExpense(index){
    expenses.splice(index,1);
    if(expenses.length===0){
        document.getElementById("expenseList").innerHTML="";
        document.getElementById("summary").innerHTML="";
        return;
    }
    displayExpenses();
}