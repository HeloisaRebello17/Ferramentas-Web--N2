function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
}

function selectItem(selectedId, dropdownId, value) {
    document.getElementById(selectedId).innerText = value;
    document.getElementById(dropdownId).style.display = 'none';
}

function selectTheme(selectedId, dropdownId, theme) {
    selectItem(selectedId, dropdownId, theme);
    document.body.setAttribute('data-theme', theme === 'Claro' ? 'light' : 'dark');
}
