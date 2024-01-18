const input_text= document.getElementById("todo-input-box");
const list_container=document.getElementById("list-container");


function addTodo(){

    if(input_text.value===''){
        alert("Nothing to add");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML=input_text.value;
        list_container.appendChild(li);
    }
}