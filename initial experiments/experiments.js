const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  talk() {
    console.log("lul look at me scriptinnnn");
  }
};

const person2 = {
  name: "Not Brian Holt",
  city: "Not Seattle",
  state: "Not WA",
  age: 30,
  talk() {
    console.log(`And I talk like dis : \n\t${this.talk()}`);
  }
};

const daysOfTheWeek = ["monday", "tuesday"];

daysOfTheWeek.forEach(days => {
  // console.error(days.bold())
});

const button = document.querySelector(".event-button");
button.addEventListener("click", function() {
  alert("eyyyyyyyy LMAO");
});

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function() {
  paragraph.innerText = input.value;
});

const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function() {
  paragraph.style.backgroundColor = input.value;
});

document
  .querySelector(".button-container")
  .addEventListener("click", function(event) {
    alert(`you clicked on button ${event.target.innerText}`);
  });
