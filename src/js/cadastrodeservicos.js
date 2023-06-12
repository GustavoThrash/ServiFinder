

const form = document.querySelector('form');



if (localStorage.getItem('servicos')) {
  const servicos = JSON.parse(localStorage.getItem('servicos'));
  const ultimoServico = servicos[servicos.length - 1];
  document.getElementById('nome').value = ultimoServico.nome;
  document.getElementById('prestador').value = ultimoServico.prestador;
  document.getElementById('descricao').value = ultimoServico.descricao;
  document.getElementById('cidade').value = ultimoServico.cidade;
  document.getElementById('telefone').value = ultimoServico.telefone;
}

function cadastrar(event) {
  
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const prestador = document.getElementById('prestador').value;
  const descricao = document.getElementById('descricao').value;
  const cidade = document.getElementById('cidade').value;
  const telefone = document.getElementById('telefone').value;

  const servicos = JSON.parse(localStorage.getItem('servicos')) || [];

 
  servicos.push({
    nome: nome,
    prestador: prestador,
    descricao: descricao,
    cidade: cidade,
    telefone: telefone
  });

  localStorage.setItem('servicos', JSON.stringify(servicos));


  Swal.fire({
   text: 'Serviço cadastrado com sucesso!',
   icon: 'success',
    timer: 3000,
   showConfirmButton: false
  }).then(() => {
   window.location.href = './teladelogin.html';
  });
}


form.addEventListener('submit', cadastrar);