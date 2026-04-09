import data from './data.json' with { type: 'json' };

let attemptLogin = 3;
const resultado = document.getElementById("resultado");

function login() {
    const emailInf = document.getElementById("email").value;
    const senhaInf = document.getElementById("senha").value;

    let i = 0;
    let usuarioValido = null;

    do {
        if (data[i].email === emailInf && data[i].senha === senhaInf) {
            usuarioValido = data[i];
        }
        i++;
    } while (i < data.length && !usuarioValido);

    if (usuarioValido) {
        resultado.style.color = "limegreen";
        resultado.innerText = "Login realizado!";
        return true;
    } else {
        attemptLogin--;
        throw new Error(`Dados incorretos. Tentativas: ${attemptLogin}`);
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    try {
        if (attemptLogin > 0) {
            login();
        } else {
            resultado.style.color = "red";
            resultado.style.fontWeight = "bold";
            resultado.innerText = "Acesso bloqueado.";
        }
    } catch (e) {
        resultado.style.color = "red";
        resultado.innerText = e.message;
    }
});