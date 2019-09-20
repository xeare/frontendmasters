const page = document.querySelector(".doggos");
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function gimmeMoreDoggos() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedPromise) {
      const img = document.createElement("img");
      img.src = processedPromise.message;
      img.alt = "Cute Doggo";
      page.appendChild(img);
    });
}

document.querySelector(".addDoggo").addEventListener("click", gimmeMoreDoggos);
