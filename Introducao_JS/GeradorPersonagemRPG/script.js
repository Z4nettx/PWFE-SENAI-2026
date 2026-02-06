const nomeIn = document.getElementById("nome");
const classeIn = document.getElementById("classe");
const skillIn = document.getElementById("skill");
const buttonGerar = document.getElementById("gerarP");
const result = document.getElementById("result");
const selectedOption = classeIn.selectedOptions[0];

if (selectedOption) {
    classeIn.style.color = "#fff";
}

function gerar() {
        const nome = nomeIn.value;
        const classe = classeIn.value;
        const skill = skillIn.value;
        result.style.display = "flex";
        switch (classe) {
            case "Combatente":
                alert(`O grande tanque de guerra '${nome}' entrou na Ordo Realitas!`);
                result.innerHTML = `<p>${nome}, grande guerreiro ${classe}, se tornou um agente da Ordo Realitas. Sua principal habilidade é a <strong>'${skill}'</strong></p>`;
                break;
            case "Ocultista":
                alert(`O mestre ocultista '${nome}' entrou na Ordo Realitas!`);
                result.innerHTML = `${nome}, grande mago ${classe}, se tornou um agente da Ordo Realitas. Sua principal habilidade é a <strong>'${skill}'</strong>`;
                break;
            case "Especialista":
                alert(`O inteligentíssimo agente '${nome}' entrou na Ordo Realitas!`);
                result.innerHTML = `<p>${nome}, grande mestre ${classe}, se tornou um agente da Ordo Realitas. Sua principal habilidade é a <strong>'${skill}'</strong></p>`;
                break;
        }
}
    
buttonGerar.addEventListener("click", event => {
    event.preventDefault();

    if (!nomeIn.value || !classeIn.value || !skillIn.value) {
        alert("⚠️ Atenção, preencha os três campos para a criação do personagem!");
        return;
    }
    gerar();
}
)