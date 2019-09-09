const container = document.querySelector(".container")
const button = document.querySelector("button")
let flipped = false;

button.addEventListener("click", () => {
  if(!flipped) {
    container.classList = "container card flip";
    flipped = !flipped;
    return
  } else {
    container.classList = "container card";
    flipped = !flipped;
    return
  }
})