$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('body').toggleClass('menu-open');
    $('.imgLoginCostuUm').toggleClass('menu-open-img');
    $('.imgCriarConta1').toggleClass('menu-open-img');
  });

  $('#btn-HomeCadastro').click(function (event) {
    // Redirecionar para cadastroNovoUsuario.html
    window.location.href = '/cadastroUsuario';
  });
  
  $('#btn-homeLogin').click(function (event) {
  
    window.location.href = '/login';
  });
  
  
});
