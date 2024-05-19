$(document).ready(function () {
    var userType = 'cliente'; // Valor padrão

    // Define userType com base no botão clicado e faz a solicitação AJAX
    $('#btn-Cliente').click(function (event) {
        event.preventDefault();
        userType = 'cliente';
        fazerLogin();
    });

    $('#btn-Costureira').click(function (event) {
        event.preventDefault();
        userType = 'costureira';
        fazerLogin();
    });

    function fazerLogin() {
        var nome = $('#NomeLogin').val();
        var senha = $('#SenhaLogin').val();

        if (nome.trim() === '' || senha.trim() === '') {
            Swal.fire('Erro', 'Por favor, preencha todos os campos', 'error');
            return;
        }

        var url = userType === 'costureira' ? '/loginCostureira' : '/login';

        $.ajax({
            url: url,
            method: 'POST',
            data: {
                nome: nome,
                senha: senha
            },
            success: function (response) {
                if (response === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login bem-sucedido",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = '/home';
                    });
                } else {
                    Swal.fire('Erro', 'Nome de usuário ou senha incorretos. Por favor, tente novamente.', 'error');
                }
            },
            error: function (xhr, status, error) {
                console.error('Erro ao fazer login:', error);
                Swal.fire('Erro', 'Erro interno do servidor. Por favor, tente novamente mais tarde.', 'error');
            }
        });
    }
});
