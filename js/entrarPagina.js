// Seleciona o botão pelo ID
const entrarButton = document.getElementById('entrarButton');

// Adiciona um ouvinte de evento de clique ao botão
entrarButton.addEventListener('click', () => {
    // Define a URL para a qual deseja redirecionar
    const novaPagina = 'menu com aviso.html'; // Substitua com a URL desejada

    // Navega para a nova página
    window.location.href = novaPagina;
});
