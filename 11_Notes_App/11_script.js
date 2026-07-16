let notes=JSON.parse(localStorage.getItem("notes"))||[];
let editIndex=-1;
displayNotes();
document.getElementById("saveBtn").addEventListener("click",saveNote);
function saveNote(){
let title=document.getElementById("title").value.trim();
let note=document.getElementById("note").value.trim();

if(title===""){
alert("Please enter note title.");
return;
}

if(note===""){
alert("Please write your note.");
return;
}
let noteObject={
title:title,
note:note
};

if(editIndex===-1){
notes.push(noteObject);
}else{
notes[editIndex]=noteObject;
editIndex=-1;
document.getElementById("saveBtn").innerHTML="Save Note";
}

localStorage.setItem("notes",JSON.stringify(notes));
displayNotes();
document.getElementById("title").value="";
document.getElementById("note").value="";
document.getElementById("title").focus();
}

function displayNotes(){
let container=document.getElementById("notesContainer");
container.innerHTML="";

if(notes.length===0){
container.innerHTML="<h3>No Notes Available.</h3>";
return;
}

for(let i=0;i<notes.length;i++){
container.innerHTML+=`
<div class="note">
<h3>${notes[i].title}</h3>
<p>${notes[i].note}</p>
<div class="actions">
<button class="edit" onclick="editNote(${i})">Edit</button>
<button class="delete" onclick="deleteNote(${i})">Delete</button>
</div>
</div>
`;
}
}

function editNote(index){
document.getElementById("title").value=notes[index].title;
document.getElementById("note").value=notes[index].note;
editIndex=index;
document.getElementById("saveBtn").innerHTML="Update Note";

window.scrollTo({
top:0,
behavior:"smooth"
});
}

function deleteNote(index){
let confirmDelete=confirm("Are you sure you want to delete this note?");
if(!confirmDelete){
return;
}
notes.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notes));
displayNotes();
}