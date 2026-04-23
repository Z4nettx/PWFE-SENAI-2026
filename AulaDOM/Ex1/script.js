let ul = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Item";
    ul.appendChild(li);
});
