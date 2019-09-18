const input = document.querySelector(".calc");
const screen = document.querySelector(".screen");

document.querySelector(".calc").addEventListener("click", function(event) {
  screen.style.innerText = input.value;
  console.log(`This is screen text ${screen.innerText}`);
  console.log(`This is input from calc text ${screen.innerText}`);
});
