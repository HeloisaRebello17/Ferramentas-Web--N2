function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectItem(selectedItemId, dropdownId, item) {
    document.getElementById(selectedItemId).textContent = item;
    document.getElementById(dropdownId).style.display = "none";
}

function selectTheme(selectedItemId, dropdownId, theme) {
    document.getElementById(selectedItemId).textContent = theme === 'Claro' ? 'Modo Claro' : 'Modo Escuro';
    document.getElementById(dropdownId).style.display = "none";
    document.body.setAttribute('data-theme', theme === 'Claro' ? 'light' : 'dark');
}