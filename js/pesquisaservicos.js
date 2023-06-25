const listaServicos = document.querySelector(".lista-servicos");
const campoBusca = document.querySelector("#busca");
const urlParams = new URLSearchParams(window.location.search);
const tipoServico = urlParams.get("tipo");

function mostrarServicos(servicos) {
  listaServicos.innerHTML = "";

  if (servicos.length === 0 && campoBusca.value !== "") {
    const item = document.createElement("li");
    item.textContent = "Serviço não encontrado";
    listaServicos.appendChild(item);
  } else {
    servicos.forEach((servico) => {
      const item = document.createElement("li");
      const container = document.createElement("div");
      container.classList.add("servico-container");

      const nomeServico = document.createElement("h2");
      nomeServico.innerHTML = `<strong>Tipo de serviço:</strong> ${servico.nome}`;
      container.appendChild(nomeServico);

      const nomePrestador = document.createElement("h3");
      nomePrestador.innerHTML = `<strong>Nome do prestador:</strong> ${servico.prestador}`;
      container.appendChild(nomePrestador);

      const descricao = document.createElement("p");
      descricao.innerHTML = `<strong>Descrição do Serviço:</strong> ${servico.descricao}`;
      container.appendChild(descricao);

      const cidade = document.createElement("p");
      cidade.innerHTML = `<strong>Cidade:</strong> ${servico.cidade}`;
      container.appendChild(cidade);

      const telefone = document.createElement("p");
      telefone.innerHTML = `<strong>Telefone/WhatsApp:</strong> ${servico.telefone}`;
      container.appendChild(telefone);

      const imagem = document.createElement("img");
      imagem.src = servico.imagem;
      imagem.alt = "Imagem do serviço";
      imagem.classList.add("imagem-servico");
      container.appendChild(imagem);

      const whatsappButton = document.createElement("a");
      whatsappButton.classList.add("whatsapp-button");
      whatsappButton.href = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        servico.telefone
      )}&text=${encodeURIComponent(
        "Olá, sou prestador de serviço. Quer me contratar?"
      )}`;
      whatsappButton.target = "_blank";
      whatsappButton.innerHTML = `<img src="./img/WWS.png" alt="WhatsApp">`;

      container.appendChild(whatsappButton);
      item.appendChild(container);
      listaServicos.appendChild(item);
    });
  }
}

function buscarServicos() {
  const busca = campoBusca.value.toLowerCase();

  if (localStorage.getItem("servicos")) {
    const servicos = JSON.parse(localStorage.getItem("servicos"));

    const servicosEncontrados = servicos.filter((servico) => {
      const nome = servico.nome.toLowerCase();
      const cidade = servico.cidade.toLowerCase();
      return nome.includes(busca) || cidade.includes(busca);
    });

    mostrarServicos(servicosEncontrados);
  }
}

campoBusca.addEventListener("input", () => {
  if (campoBusca.value !== "") {
    buscarServicos();
  } else {
    listaServicos.innerHTML = "";
  }
});
