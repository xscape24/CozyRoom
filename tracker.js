//Variables






//Event Listeners
document.getElementById('todo-input').addEventListener('keydown',function (event){
if(event.key==='Enter'){//Enter key
   event.preventDefault();
   document.getElementById('add-to-list-btn').click();
   console.log('done');
}
});



$('todo-input').keypress(function(e){
if(e.keyCode===13){$('add-to-list-btn').click()}
});






//Functions
function addItem(){ //add item to list
var li= document.createElement("li");
li.className="todo-item";
var inputValue =document.getElementById("todo-input").value;

if(inputValue===''){
    alert("No item entered!");
}else{
var text=document.createTextNode(inputValue);
li.appendChild(text);

var x =document.createElement("button");
x.style.color="red";
x.style.height="12rem";
x.style.width="12rem";
x.innerText="X";
x.style.marginLeft="2rem";
x.className="remove-btn";
x.id=inputValue;
li.appendChild(x)
var todolist=document.getElementById("to-do-list");
todolist.appendChild(li);
document.getElementById("todo-input").placeholder="";
document.getElementById("todo-input").value="Enter an item";

}
}

function removeItem(){//remove item from list
    var todolist=document.getElementById("to-do-list");
    var listItem=document.getElementsByClassName("todo-item")

var inputValue =document.getElementById("todo-input").value;
todolist.removeChild(listItem);
}