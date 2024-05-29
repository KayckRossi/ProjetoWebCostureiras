$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.imgLoginCostuUm').toggleClass('menu-open-img');
        $('.imgCriarConta1').toggleClass('menu-open-img');
        $('.imgEmitidoUm').toggleClass('menu-open-img');
    });

    $('#btn-HomeCadastro').click(function (event) {
        window.location.href = '/cadastroUsuario';
    });

    $('#btn-homeLogin').click(function (event) {
        window.location.href = '/login';
    });

    const logoImages = $(".logoHome");
    const homeLink = $("<a>").attr({
        href: "./home",
    });

    logoImages.each(function () {
        $(this).wrap(homeLink);
    });

    var userType = sessionStorage.getItem('userType') || 'cliente'; // Recupere o tipo de usuário da sessão

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
                console.log('Resposta do servidor:', response); // Adicione este log para ver a resposta no console do navegador
                if (response === 'success' || response === 'success-admin') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login bem-sucedido",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        // Armazene o tipo de usuário na sessão
                        var userType = response === 'success' ? 'cliente' : 'admin';
                        sessionStorage.setItem('userType', userType);
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

    // Função para gerar o menu com base no tipo de usuário
    function generateMenu(userType) {
        var clienteMenu = `
  <div class="conteiner-fluid">
    <div class="row">
      <div class="col">
        <h3>Cadastrar</h3>
        <ul class="uLmenus">
          <li><a href="./cadastroCliente">Cliente</a></li>
          <li><a href="./cadastroPedido">Pedidos</a></li>
        </ul>
      </div>
      <div class="col colMovi">
        <h3>Movimentação</h3>
        <ul class="uLmenus">
          <li><a href="./emitidosCliente">Pedidos</a></li>
        </ul>
      </div>
      <div class="col">
        <h3 class="ajuda">Ajuda</h3>
        <ul class="uLmenus">
          <li><a href="./sobrenos">Sobre nós</a></li>
          <li><a href="https://wa.link/jf45be">Whatsapp</a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#clienteInfoModal">Informações do Cliente</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

        var adminMenu = `
          <div class="conteiner-fluid">
              <div class="row">
                  <div class="col">
                      <h3>Cadastrar</h3>
                      <ul class="uLmenus">
                          <li><a href="./cadastroUsuario">Cliente</a></li>
                          <li><a href="./cadastroPedido">Pedidos</a></li>
                      </ul>
                  </div>
                  <div class="col colMovi">
                      <h3>Movimentação</h3>
                      <ul class="uLmenus">
                          <li><a href="/emitidos">Pedidos Emitidos</a></li>
                          <li><a href="./manutencaoPedido">Manutenção Pedidos</a></li>
                          <li><a href="./manutencaoCliente">Manutenção Cliente</a></li>
                      </ul>
                  </div>
                  <div class="col">
                      <h3 class="ajuda">Ajuda</h3>
                      <ul class="uLmenus">
                          <li><a href="./sobrenos">Sobre nós</a></li>
                          <li><a href="https://wa.link/jf45be">Whatsapp</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      `;

        if (userType === 'cliente') {
            $('#dynamicMenu').html(clienteMenu);
        } else if (userType === 'admin') {
            $('#dynamicMenu').html(adminMenu);
        }
    }

    // Chame a função generateMenu ao carregar a página
    generateMenu(userType);

    function abrirModalInfoCliente() {
        $.ajax({
            url: '/dadosCliente',
            method: 'GET',
            success: function (data) {
                var modalHtml = `
            <div class="modal fade" id="clienteInfoModal" tabindex="-1" aria-labelledby="clienteInfoModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="clienteInfoModalLabel">Informações do Cliente</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p><strong>ID:</strong> ${data.id_cliente}</p>
                    <p><strong>Nome:</strong> ${data.nome_cliente}</p>
                    <p><strong>Telefone:</strong> ${data.telefone}</p>
                    <p><strong>Endereço:</strong> ${data.endereco}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  </div>
                </div>
              </div>
            </div>
          `;

                $('body').append(modalHtml);

                // Abre a modal
                $('#clienteInfoModal').modal('show');
            },
            error: function (xhr, status, error) {
                console.error('Erro ao obter dados do cliente:', error);
            }
        });
    }

    $(document).on('click', '[data-bs-target="#clienteInfoModal"]', function (event) {
        event.preventDefault();
        abrirModalInfoCliente();
    });
});
