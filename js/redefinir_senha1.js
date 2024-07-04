document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Link para redefinição de senha enviado!');
});

// Seleciona o botão pelo ID
const resetButton = document.getElementById('resetButton');

// Adiciona um ouvinte de evento de clique ao botão
resetButton.addEventListener('click', () => {
    // Define a URL para a qual deseja redirecionar
    const novaPagina = 'redefinir_senha.html'; // Substitua com a URL desejada

    // Navega para a nova página
    window.location.href = novaPagina;
});
