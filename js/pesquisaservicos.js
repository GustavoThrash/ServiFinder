const listaServicos = document.querySelector('.lista-servicos');
const campoBusca = document.querySelector('#busca');
const urlParams = new URLSearchParams(window.location.search);
const tipoServico = urlParams.get('tipo');

function mostrarServicos(servicos) {
    listaServicos.innerHTML = '';

    if (servicos.length === 0 && campoBusca.value !== '') {
        const item = document.createElement('li');
        item.textContent = 'Serviço não encontrado';
        listaServicos.appendChild(item);
    } else {
        servicos.forEach(servico => {
            const item = document.createElement('li');
            item.innerHTML = `<h2><strong>Tipo de serviço:</strong>${servico.nome}</h2><h3><strong>Nome do prestador:</strong>${servico.prestador}</h3> 
            <p><strong>Descrição do Serviço:</strong>${servico.descricao}</p> <p><strong>Cidade:</strong>${servico.cidade}</p> <p><strong>Telefone/whatsapp:</strong> ${servico.telefone}</p>`;
            listaServicos.appendChild(item);
        });
    }
}

function buscarServicos() {
    const busca = campoBusca.value.toLowerCase();

    if (localStorage.getItem('servicos')) {
        const servicos = JSON.parse(localStorage.getItem('servicos'));

        const servicosEncontrados = servicos.filter(servico => {
            const nome = servico.nome.toLowerCase();
            const cidade = servico.cidade.toLowerCase();
            return nome.includes(busca) || cidade.includes(busca);
        });

        mostrarServicos(servicosEncontrados);
    }
}

campoBusca.addEventListener('input', () => {
    if (campoBusca.value !== '') {
        buscarServicos();
    } else {
        listaServicos.innerHTML = '';
    }
});