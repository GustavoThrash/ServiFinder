// Recupera o usuário logado do armazenamento local
let userLogado = JSON.parse(localStorage.getItem("userLogado"));

// Exibe o nome do usuário logado na página
let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

// Verifica se o usuário está logado, caso contrário redireciona para a página de login
if (localStorage.getItem("token") == null || localStorage.getItem("userLogado") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./signin.html";
}

// Função para redirecionar para a página de cadastro de serviço
function PrestarServico() {
  window.location.href = "./cadastrodeservicos.html";
}

// Função para redirecionar para a página de pesquisa de serviços
function Contrate() {
  window.location.href = "./pesquisaservicos.html";
}

// Função para efetuar o logout
function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./signin.html";
}

// Seleciona os elementos do DOM
const card = document.getElementById("servico-cadastrado");
const nomeServico = document.getElementById("nome-servico");
const prestadorServico = document.getElementById("prestador-servico");
const descricaoServico = document.getElementById("descricao-servico");
const cidadeServico = document.getElementById("cidade-servico");
const telefoneServico = document.getElementById("telefone-servico");
const imageServico = document.getElementById("image-servico");

// Verifica se há serviços cadastrados no armazenamento local
if (localStorage.getItem("servicos")) {
  const servicos = JSON.parse(localStorage.getItem("servicos"));
  const ultimoServico = servicos[servicos.length - 1];

  // Preenche os campos com as informações do último serviço cadastrado
  nomeServico.textContent = ultimoServico.nome;
  prestadorServico.textContent = ultimoServico.prestador;
  descricaoServico.textContent = ultimoServico.descricao;
  cidadeServico.textContent = ultimoServico.cidade;
  telefoneServico.textContent = ultimoServico.telefone;
  imageServico.src = ultimoServico.image;

  if (ultimoServico.image) {
    // Criar um elemento <img> e atribuir a imagem
    const imageServico = document.createElement("image");
    imageServico.src = ultimoServico.image;
  
    // Adicionar a imagem ao card
    imageServico.appendChild(imgServico);
  }

  // Remove a classe "hidden" para exibir o card
  card.classList.remove("hidden");
}

// Função para habilitar a edição dos campos
function habilitarEdicao() {
  nomeServico.contentEditable = true;
  prestadorServico.contentEditable = true;
  descricaoServico.contentEditable = true;
  cidadeServico.contentEditable = true;
  telefoneServico.contentEditable = true;
}

// Função para excluir o serviço
function excluirServico() {
  const servicos = JSON.parse(localStorage.getItem("servicos"));

  if (servicos && servicos.length > 0) {
    Swal.fire({
      title: "Tem certeza?",
      text: "Deseja excluir seu serviço?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      customClass: {
        confirmButton: "btn-confirmar",
        cancelButton: "btn-cancelar",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("servicos");
        Swal.fire({
          title: "Exclusão realizada",
          text: "Seu serviço foi excluído com sucesso!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "./teladelogin.html";
        });
      }
    });
  } else {
    Swal.fire({
      title: "Sem serviços cadastrados",
      text: "Não há serviços para excluir.",
      icon: "info",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
}

// Função para salvar as informações do serviço
function salvarInformacoes() {
  var nomeServico = document.getElementById("nome-servico").textContent;
  var prestadorServico = document.getElementById("prestador-servico").textContent;
  var descricaoServico = document.getElementById("descricao-servico").textContent;
  var cidadeServico = document.getElementById("cidade-servico").textContent;
  var telefoneServico = document.getElementById("telefone-servico").textContent;

  const servicos = JSON.parse(localStorage.getItem("servicos")) || [];
  const ultimoServico = servicos[servicos.length - 1];
  ultimoServico.nome = nomeServico;
  ultimoServico.prestador = prestadorServico;
  ultimoServico.descricao = descricaoServico;
  ultimoServico.cidade = cidadeServico;
  ultimoServico.telefone = telefoneServico;
  localStorage.setItem("servicos", JSON.stringify(servicos));

  // Desabilita a edição dos campos
  nomeServico.contentEditable = false;
  prestadorServico.contentEditable = false;
  descricaoServico.contentEditable = false;
  cidadeServico.contentEditable = false;
  telefoneServico.contentEditable = false;

  console.log("Nome:", nomeServico);
  console.log("Descrição:", descricaoServico);
  console.log("Cidade:", cidadeServico);
  console.log("Telefone:", telefoneServico);
}