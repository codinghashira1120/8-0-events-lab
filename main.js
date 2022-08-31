// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelectorAll(".color")

for (let e of palette) {
  e.addEventListener("click", changeColor)
}

const currentColor = document.querySelector("#current-color")

function changeColor(event){
  currentColor.setAttribute("style", `background-color: ${event.target.style.backgroundColor}`)
}

const cells = document.querySelectorAll(".cell")

function cellColor(event){
  event.target.setAttribute("style", `background-color: ${currentColor.style.backgroundColor}`)
}

cells.forEach((cell) => cell.addEventListener("mousedown", cellColor))


const button = document.createElement("button")

button.addEventListener("click", resetColors)

function resetColors(event){
for (let cell of cells) {
  cell.setAttribute("style", "background-color: white")
}
}

const resetArea = document.createElement("section")

document.querySelector("#palette").after(resetArea)

resetArea.append(button)

const fillArea = document.createElement("button")

fillArea.addEventListener("click", fillColors)

function fillColors(event){
  for (let cell of cells) {
    cell.setAttribute("style", `background-color: ${currentColor.style.backgroundColor}`)
  }
}

button.after(fillArea)





