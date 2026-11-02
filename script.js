console.log("Script loaded successfully!");

const para = document.querySelector("p");

para.addEventListener("click", function () {
  para.textContent = "You clicked the paragraph!";
  para.style.color = "green";
});