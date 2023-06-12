let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token','userLogado') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = './signin.html';
}

function PrestarServico(){
  window.location.href ='./cadastrodeservicos.html' 
}

function Contrate(){
  window.location.href = './pesquisaservicos.html'
}


function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = './signin.html'
}

const card = document.getElementById('servico-cadastrado');
const nomeServico = document.getElementById('nome-servico');
const prestadorServico = document.getElementById('prestador-servico');
const descricaoServico = document.getElementById('descricao-servico');
const cidadeServico = document.getElementById('cidade-servico');
const telefoneServico = document.getElementById('telefone-servico');

if (localStorage.getItem('servicos')) {
  const servicos = JSON.parse(localStorage.getItem('servicos'));
  const ultimoServico = servicos[servicos.length - 1];
  nomeServico.textContent = ultimoServico.nome;
  prestadorServico.textContent = ultimoServico.prestador;
  descricaoServico.textContent = ultimoServico.descricao;
  cidadeServico.textContent = ultimoServico.cidade;
  telefoneServico.textContent = ultimoServico.telefone;
  card.classList.remove('hidden');
}

function habilitarEdicao() {
  const nomeServico = document.getElementById('nome-servico');
  const prestadorServico = document.getElementById('prestador-servico');
  const descricaoServico = document.getElementById('descricao-servico');
  const cidadeServico = document.getElementById('cidade-servico');
  const telefoneServico = document.getElementById('telefone-servico');

  nomeServico.contentEditable = true;
  prestadorServico.contentEditable = true;
  descricaoServico.contentEditable = true;
  cidadeServico.contentEditable = true;
  telefoneServico.contentEditable = true;
}
// Evento de teclado para salvar as informações ao pressionar Enter
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    salvarInformacoes();
  }
});

function excluirServico() {
  const servicos = JSON.parse(localStorage.getItem('servicos'));

  if (servicos && servicos.length > 0) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Deseja excluir seu serviço?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      customClass: {
        confirmButton: 'btn-confirmar',
        cancelButton: 'btn-cancelar'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        servicos.pop(); // Remove o último serviço do array

        localStorage.setItem('servicos', JSON.stringify(servicos));

        Swal.fire({
          title: 'Exclusão realizada',
          text: 'Seu serviço foi excluído com sucesso!',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          window.location.href = './teladelogin.html';
        });
      }
    });
  } else {
    Swal.fire({
      title: 'Sem serviços cadastrados',
      text: 'Não há serviços para excluir.',
      icon: 'info',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
}


function salvarInformacoes() {
  var nomeServico = document.getElementById('nome-servico').textContent;
  var prestadorServico = document.getElementById('prestador-servico').textContent;
  var descricaoServico = document.getElementById('descricao-servico').textContent;
  var cidadeServico = document.getElementById('cidade-servico').textContent;
  var telefoneServico = document.getElementById('telefone-servico').textContent;

  const servicos = JSON.parse(localStorage.getItem('servicos')) || [];
  const ultimoServico = servicos[servicos.length - 1];
  ultimoServico.nome = nomeServico;
  ultimoServico.prestador= prestadorServico;
  ultimoServico.descricao = descricaoServico;
  ultimoServico.cidade = cidadeServico;
  ultimoServico.telefone = telefoneServico;
  localStorage.setItem('servicos', JSON.stringify(servicos));

  // Desabilita a edição dos campos
  nomeServico.contentEditable = false;
  prestadorServico.contentEditable = false;
  descricaoServico.contentEditable = false;
  cidadeServico.contentEditable = false;
  telefoneServico.contentEditable = false;



  console.log('Nome:', nomeServico);
  console.log('Descrição:', descricaoServico);
  console.log('Cidade:', cidadeServico);
  console.log('Telefone/WhatsApp:', telefoneServico);
}
