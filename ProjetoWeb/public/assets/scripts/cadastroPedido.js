$(document).ready(function() {
  // Função para carregar os produtos no select
  function carregarProdutos() {
    $.ajax({
      url: '/produtos', // Rota para obter os produtos
      method: 'GET',
      success: function(response) {
        // Limpar o select antes de adicionar novas opções
        $('#selectProduto').empty();

        // Adicionar uma opção padrão
        $('#selectProduto').append($('<option>', {
          value: '',
          text: 'Selecione um produto'
        }));

        // Adicionar cada produto como uma opção no select
        response.forEach(function(produto) {
          var option = $('<option>', {
            value: produto.id_produto,
            text: produto.nome_produto + ' - R$ ' + produto.valor.toFixed(2)
          });
          option.data('price', produto.valor); // Armazenar o preço como um atributo de dados
          $('#selectProduto').append(option);
        });

        // Chamar a função para calcular o valor total quando os produtos forem carregados
        calcularValorTotal();
      },
      error: function(xhr, status, error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    });
  }

  // Função para calcular e exibir o valor total com base nos produtos selecionados
  function calcularValorTotal() {
    var total = 0;
    $('#selectProduto option:selected').each(function() {
      var price = parseFloat($(this).data('price'));
      total += price;
    });

    // Recuperar a quantidade total de produtos selecionados
    var totalQuantity = $('#selectProduto option:selected').length;

    // Exibir a quantidade total no campo de quantidade
    $('#QtdCadPedido').val(totalQuantity);

    // Exibir o valor total no campo de valor
    $('#CadPedValor').val(total.toFixed(2));
  }

  // Adicionar evento de mudança no select para calcular o valor total
  $('#selectProduto').change(function() {
    calcularValorTotal();
  });

  // Chamar a função para carregar os produtos quando o documento estiver pronto
  carregarProdutos();

  // Adicionar event listener para o formulário de cadastro
  $('#registroForm').submit(function(event) {
    event.preventDefault();

    // Capturar os dados do formulário
    var pedido = $('#selectProduto').val();
    var medidas = $('#CadPedMedida').val();
    var valor = $('#CadPedValor').val();
    var quantidade = $('#QtdCadPedido').val();

    // Fazer validações dos campos, se necessário
    if (!pedido || !medidas || !valor || !quantidade) {
      Swal.fire('Erro', 'Por favor, preencha todos os campos', 'error');
      return;
    }

    // Enviar os dados para o servidor via AJAX
    $.ajax({
      url: '/cadastroPedido',
      method: 'POST',
      data: {
        pedido: pedido,
        medidas: medidas,
        valor: valor,
        quantidade: quantidade
      },
      success: function(response) {
        // Tratar a resposta do servidor, se necessário
        Swal.fire('Sucesso', response, 'success')
          .then((value) => {
            // Redirecionar para outra página, se necessário
            window.location.href = '/outra_pagina';
          });
      },
      error: function(xhr, status, error) {
        console.error('Erro ao cadastrar o pedido:', error);
        Swal.fire('Erro', 'Erro interno do servidor. Por favor, tente novamente mais tarde.', 'error');
      }
    });

    // Limpar o formulário após o envio
    $('#registroForm')[0].reset();
  });

  // Adicionar event listener para o botão de excluir
  $('#excluirBtn').click(function(event) {
    event.preventDefault();

    // Lógica para exclusão, se necessário
    console.log('Botão Excluir clicado');
  });

  // Adicionar event listener para o botão de salvar
  $('#salvarBtn').click(function(event) {
    event.preventDefault();

    // Lógica para salvar, se necessário
    console.log('Botão Salvar clicado');
  });

  // Adicionar event listener para o botão de sair
  $('#sairBtn').click(function(event) {
    event.preventDefault();

    // Lógica para sair, se necessário
    console.log('Botão Sair clicado');
  });
});
