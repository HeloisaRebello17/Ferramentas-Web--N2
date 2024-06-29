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
        saveChanges: 'Save Changes'
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
        saveChanges: 'Salvar Alterações'
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
        saveChanges: 'Guardar Cambios'
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
    document.getElementById(selectedId).innerText = value;
    document.getElementById(dropdownId).style.display = 'none';
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

function selectTheme(selectedId, dropdownId, theme) {
    selectItem(selectedId, dropdownId, theme);
    document.body.setAttribute('data-theme', theme === 'Claro' ? 'light' : 'dark');
}
