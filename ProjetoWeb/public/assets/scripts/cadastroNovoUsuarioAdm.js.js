$(document).ready(function () {
  $('#flexSwitchCheckChecked').change(function () {
    if ($(this).is(':checked')) {
      $('#campoTelefone').hide();
      $('#campoEndereco').hide();
      $('#campoSenha').show();
    } else {
      $('#campoTelefone').show();
      $('#campoEndereco').show();
      $('#campoSenha').hide();
    }
  });

  $('#flexSwitchCheckChecked').trigger('change');

  $('#registroForm').off('submit').submit(function (event) {
    event.preventDefault();

    var nome = $('#nomeCadastroCliente').val();
    var senha = $('#senhaCadastroCliente').val();
    var telefone = $('#telefoneCadastroCliente').val();
    var endereco = $('#enderecoCadastroCliente').val();

    var data = { nome: nome };

    var url = $('#flexSwitchCheckChecked').is(':checked') ? '/cadastroUsuario' : '/cadastroClienteAdm';

    if ($('#flexSwitchCheckChecked').is(':checked')) {
      data.senha = senha;
      $('#registroForm')[0].reset();
    } else {
      data.telefone = telefone;
      data.endereco = endereco;
    }

    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      success: function (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cadastro realizado com sucesso",
          showConfirmButton: false,
          timer: 1500
        });
        $('#registroForm')[0].reset();
      },
      error: function (xhr, status, error) {
        console.error('Erro ao cadastrar:', error);
        Swal.fire('Erro', 'Erro interno do servidor. Por favor, tente novamente mais tarde.', 'error');
      }
      
    });

    return false; // Adicionado para prevenir múltiplos envios
  });
});
