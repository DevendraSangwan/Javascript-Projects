const products=[
{
id:1,
name:"Laptop",
category:"Electronics",
price:55000,
quantity:5
},
{
id:2,
name:"Smartphone",
category:"Electronics",
price:25000,
quantity:10
},
{
id:3,
name:"T-Shirt",
category:"Clothing",
price:800,
quantity:20
},
{
id:4,
name:"Jeans",
category:"Clothing",
price:1500,
quantity:12
},
{
id:5,
name:"JavaScript Book",
category:"Books",
price:600,
quantity:18
},
{
id:6,
name:"React Book",
category:"Books",
price:900,
quantity:15
},
{
id:7,
name:"Headphones",
category:"Electronics",
price:3000,
quantity:8
},
{
id:8,
name:"Jacket",
category:"Clothing",
price:2500,
quantity:6
}
];
const search=document.getElementById("search");
const category=document.getElementById("category");
search.addEventListener("input",displayProducts);
category.addEventListener("change",displayProducts);
displayProducts();
function displayProducts(){
let searchValue=search.value.toLowerCase();
let categoryValue=category.value;
let filteredProducts=products.filter(product=>{
let matchName=product.name.toLowerCase().includes(searchValue);
let matchCategory=categoryValue==="All"||product.category===categoryValue;
return matchName&&matchCategory;
});
let totalInventoryValue=filteredProducts.reduce((total,product)=>{
return total+(product.price*product.quantity);
},0);

document.getElementById("inventoryValue").innerHTML=totalInventoryValue;
let output=filteredProducts.map(product=>{
const{id,name,category,price,quantity}=product;

return`
<div class="card">
<h3>${name}</h3>
<p><strong>ID :</strong> ${id}</p>
<p><strong>Category :</strong> ${category}</p>
<p><strong>Price :</strong> ₹${price}</p>
<p><strong>Quantity :</strong> ${quantity}</p>
<p><strong>Total Value :</strong> ₹${price*quantity}</p>
</div>
`;
}).join("");

if(filteredProducts.length===0){
output="<h2>No Products Found.</h2>";
}

document.getElementById("products").innerHTML=output;
}