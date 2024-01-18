const inputText= document.getElementById("todo-input");
const listContainer=document.getElementById("list-container");

function addTodo(){

    if(inputText.value===''){
        alert("Nothing to add");
    }

    else{
      let li=document.createElement('li');
      li.innerHTML=inputText.value;
      listContainer.appendChild(li);
    }

}