var content = document.querySelector(".class");
content.textContent = "This will change";

var idContent = document.querySelector("#selectId");
idContent.innerHTML = "This will change id content";

var getByid = document.getElementById("getElementByid");
getByid.innerHTML = "This change get Element by id ";

//! Selector Vs SelectorAll

const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "blue";
}

// let node = document.querySelector(".example");
// node.style.backgroundColor = "blue";

var classContent = document.querySelector(".classContent");
var btn = document.querySelector(".btnClassContent");

btn.addEventListener("click", function () {
  classContent.textContent = "Nasamte Form Nepal ";
});
