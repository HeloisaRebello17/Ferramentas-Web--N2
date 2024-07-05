document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login efetuado com sucesso!');
});


const resetButton = document.getElementById('login-button');

// Adiciona um ouvinte de evento de clique ao botão
resetButton.addEventListener('click', () => {
    // Define a URL para a qual deseja redirecionar
    const novaPagina = 'menu com aviso.html'; // Substitua com a URL desejada

    // Navega para a nova página
    window.location.href = novaPagina;
});
