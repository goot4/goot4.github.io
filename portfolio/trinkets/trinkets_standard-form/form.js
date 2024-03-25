const appetite = document.querySelector("#appetite");
const output = document.querySelector(".appetite-output");

output.textContent = `${appetite.value}g`;

appetite.addEventListener("input", () => {
    output.textContent = `${appetite.value}g`;
});
