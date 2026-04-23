const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

function mostrarNomes() {
    const lista = document.getElementById('lista');
    const fragment = document.createDocumentFragment();
    nomes.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        fragment.appendChild(item);
    });
    lista.appendChild(fragment);
}