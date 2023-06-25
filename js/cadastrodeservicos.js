const form = document.querySelector("form");

form.addEventListener("submit", cadastrar);

function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const prestador = document.getElementById("prestador").value;
  const descricao = document.getElementById("descricao").value;
  const cidade = document.getElementById("cidade").value;
  const telefone = document.getElementById("telefone").value;
  const imagem = document.getElementById("imagem").files[0];

  const servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  const usuario = userLogado.usuario;

  // Verifica se o usuário já possui um serviço cadastrado
  const servicoExistente = servicos.find(
    (servico) => servico.usuario === usuario
  );

  if (servicoExistente) {
    Swal.fire({
      text: "Você já possui um serviço cadastrado.",
      icon: "warning",
      timer: 3000,
      showConfirmButton: false,
    });
    return; // Retorna sem enviar o formulário
  }

  // Ler o arquivo de imagem selecionado e convertê-lo para Base64
  const reader = new FileReader();
  reader.onload = function (e) {
    const imagemBase64 = e.target.result;

    const novoServico = {
      usuario: usuario,
      nome: nome,
      prestador: prestador,
      descricao: descricao,
      cidade: cidade,
      telefone: telefone,
      imagem: imagemBase64,
    };

    servicos.push(novoServico);

    localStorage.setItem("servicos", JSON.stringify(servicos));

    Swal.fire({
      text: "Serviço cadastrado com sucesso!",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = "./teladelogin.html";
    });
  };
  reader.readAsDataURL(imagem);
}
