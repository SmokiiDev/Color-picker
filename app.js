function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
function generateColors() {
  const container = document.getElementById("colorContainer");
  container.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    const color = generateRandomColor();

    const colorBox = document.createElement("div");
    colorBox.classList.add("colorBox");
    colorBox.style.backgroundColor = color;

    const hexValue = document.createElement("div");
    hexValue.classList.add("hexValue");
    hexValue.innerText = color;

    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`;
    copyBtn.onclick = function () {
      navigator.clipboard.writeText(color);
      copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
      setTimeout(() => {
        copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`;
      }, 1000);
    };
    colorBox.appendChild(hexValue);
    colorBox.appendChild(copyBtn);
    container.appendChild(colorBox);
  }
}
generateColors();
