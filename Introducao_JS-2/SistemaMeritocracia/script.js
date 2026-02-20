const resultado = document.getElementById("resultado");
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const salario = Number(document.getElementById("salario").value);
    const faltas = Number(document.getElementById("faltas").value);
    const atrasos = Number(document.getElementById("atrasos").value);
    
    let analistaReaj = salario * 0.10;
    let gerenteReaj = salario * 0.15;
    let diretorReaj = salario * 0.20;

    let salarioAtual

    if (faltas == null || atrasos == null || cargo == null || salario == null || nome == null) {
        alert("Preencha os campos corretamente.");
    } else {
    if (faltas == 0 && atrasos == 0) {
        switch (cargo) {
            case "aprendiz":
                resultado.innerHTML = `${nome}(${cargo}), você não terá reajuste por enquanto, devido a sua fase de experiência. Mas parabéns pela dedicação.`;
                break;
            case "analista":
                salarioAtual = salario + analistaReaj;
                resultado.innerHTML = `${nome}(${cargo}), você não possui nenhuma falta! < Portanto, você merece um reajuste de 10%. Logo, seu novo salário será de R$ ${salarioAtual.toFixed(2)}`
                break;
            case "gerente":
                salarioAtual = salario + gerenteReaj;
                resultado.innerHTML = `${nome} (${cargo}), você não possui nenhuma falta!  Portanto, você merece um reajuste de 15%. Logo, seu novo salário será de R$ ${salarioAtual.toFixed(2)}`;
                break;
            case "diretor":
                salarioAtual = salario + diretorReaj;
                resultado.innerHTML = `${nome}(${cargo}), você não possui nenhuma falta! < Portanto, você merece um reajuste de 20%. Logo, seu novo salário será de R$ ${salarioAtual.toFixed(2)}`;
                break;
        }
    } else {
        resultado.innerHTML = `${nome}, você possui ${faltas} faltas e ${atrasos} atrasos. Você não pode ser bonificado.`
        }
    }
})