let ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 5; i++) {
        li = document.createElement("li");
        li.textContent = `Elemento ${i}`;
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    
});