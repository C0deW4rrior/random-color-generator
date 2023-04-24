const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

function getRandomColor() {
    const chars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorContainerElStr = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
    colorContainerElStr.forEach((colorContainerEl) => {
        colorContainerEl.style.background = getRandomColor();
        colorContainerEl.innerText = getRandomColor();
    })
}