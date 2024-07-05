const translations = {
    en: {
        userName: 'User',
        home: 'Home',
        accounts: 'Accounts',
        transactions: 'Transactions',
        creditCards: 'Credit Cards',
        settings: 'Settings',
        settingsTitle: 'SETTINGS',
        language: 'Language',
        currency: 'Currency',
        appearance: 'Appearance',
        saveChanges: 'Save Changes', 
        SelectATheme: 'Select a theme',
        SelectACurrency: 'Select a currency'
    },
    pt: {
        userName: 'Fulano',
        home: 'Página Inicial',
        accounts: 'Contas',
        transactions: 'Transações',
        creditCards: 'Cartões de Crédito',
        settings: 'Configurações',
        settingsTitle: 'CONFIGURAÇÕES',
        language: 'Idioma',
        currency: 'Moeda',
        appearance: 'Aparência',
        saveChanges: 'Salvar Alterações',
        SelectATheme: 'Selecione um tema',
        SelectACurrency: 'Selecione uma moeda'
    },
    es: {
        userName: 'Usuario',
        home: 'Inicio',
        accounts: 'Cuentas',
        transactions: 'Transacciones',
        creditCards: 'Tarjetas de Crédito',
        settings: 'Configuraciones',
        settingsTitle: 'CONFIGURACIONES',
        language: 'Idioma',
        currency: 'Moneda',
        appearance: 'Apariencia',
        saveChanges: 'Guardar Cambios',
        SelectATheme: 'Selecciona un tema',
        SelectACurrency: 'Seleccione una moneda'
    }
};

function translatePage(language) {
    const elements = document.querySelectorAll('.translatable');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate-key');
        el.textContent = translations[language][key];
    });
}

function selectItem(selectedId, dropdownId, value) {
    // Atualiza o texto do item selecionado
    document.getElementById(selectedId).innerText = value;

    // Fecha o dropdown após selecionar um item
    var dropdown = document.getElementById(dropdownId);
    
    dropdown.classList.remove('show'); // Remove a classe 'show' para ocultar visualmente o dropdown

    // Chama a função de tradução se necessário
    if (value === 'Inglês') {
        translatePage('en');
    } else if (value === 'Português') {
        translatePage('pt');
    } else if (value === 'Espanhol') {
        translatePage('es');
    }
}


function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
}

// Função para selecionar o tema e fechar o dropdown
function selectTheme(selectedItemId, dropdownId, theme) {
    if (theme === 'Claro') {
        document.body.classList.remove('dark-mode');
    } else if (theme === 'Escuro') {
        document.body.classList.add('dark-mode');
    }
    document.getElementById(selectedItemId).innerText = theme;
    document.getElementById(dropdownId).classList.remove('show'); // Fechar o dropdown
}





