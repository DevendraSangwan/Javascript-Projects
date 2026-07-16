const quotes=[
{
quote:"Success is not final, failure is not fatal. It is the courage to continue that counts.",
author:"Winston Churchill"
},
{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},
{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},
{
quote:"The best way to predict the future is to create it.",
author:"Peter Drucker"
},
{
quote:"Push yourself because no one else is going to do it for you.",
author:"Unknown"
},
{
quote:"Hard work beats talent when talent doesn't work hard.",
author:"Tim Notke"
},
{
quote:"Don't watch the clock; do what it does. Keep going.",
author:"Sam Levenson"
},
{
quote:"Great things never come from comfort zones.",
author:"Unknown"
},
{
quote:"Your only limit is your mind.",
author:"Unknown"
},
{
quote:"Success starts with self-belief.",
author:"Unknown"
}
];

document.getElementById("generateBtn").addEventListener("click",generateQuote);
function generateQuote(){
let randomIndex=Math.floor(Math.random()*quotes.length);
let randomQuote=quotes[randomIndex];
document.getElementById("quote").innerHTML=`"${randomQuote.quote}"`;
document.getElementById("author").innerHTML=`— ${randomQuote.author}`;
}