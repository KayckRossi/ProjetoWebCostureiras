$(document).ready(function () {
  $('#registroForm').submit(function (event) {
    event.preventDefault();

    var nome = $('#nomeCadastroCliente').val();
    var telefone = $('#telefoneCadastroCliente').val();
    var endereco = $('#enderecoCadastroCliente').val();


    // Validação adicional dos campos
    // if (!telefone.match(/^[0-9]{10,11}$/)) {
    //   Swal.fire('Erro', 'Por favor, insira um número de telefone válido', 'error');
    //   return;
    // }

    $.ajax({
      url: '/cadastroUsuario',
      method: 'POST',
      data: {
        nome: nome,
        telefone: telefone,
        endereco: endereco,
      },
      success: function (response) {
        Swal.fire('Sucesso', response, 'success');
      },
      error: function (xhr, status, error) {
        console.error('Erro ao cadastrar usuário:', error);
        Swal.fire('Erro', 'Erro interno do servidor. Por favor, tente novamente mais tarde.', 'error');
      }
    });

    // Limpa os campos do formulário
    $('#registroForm')[0].reset();
  });
});
