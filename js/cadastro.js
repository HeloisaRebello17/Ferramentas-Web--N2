document.getElementById('flexSwitchCheckDefault').addEventListener('change', function() {
    var paragraph = document.querySelector('.p-input-text');
    if (this.checked) {
      paragraph.textContent = 'Foi paga';
    } else {
      paragraph.textContent = 'Não foi paga';
    }
  });