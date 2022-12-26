let add_text = document.querySelector(".add_content");
let text_content = document.querySelector(".content");

add_text.addEventListener("click", function () {
  // adding content to the document
  text_content.textContent = text_content.textContent + " Namsate";
});
