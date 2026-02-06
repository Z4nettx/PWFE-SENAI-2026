const body = document.querySelector("body");
const toggle = document.querySelector("input")
function darkmode() {
    if (toggle.checked) {
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
    } else {
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
    }
    
}
toggle.addEventListener("change", darkmode)