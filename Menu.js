const menuItem = document.querySelectorAll('.item-menu');
const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');
const btnContainer = document.querySelector('.btn-container');
const textoBotao = document.querySelector('.texto-botao');
const iconBtn = document.querySelector('.icon-btn');

function selectLink() {
  menuItem.forEach((item) => item.classList.remove('ativo'));
  this.classList.add('ativo');
  if (menuSide.classList.contains('expandir')) {
    btnContainer.classList.remove('menu-expandido');
  } else {
    btnContainer.classList.add('menu-expandido');
  }
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

btnExp.addEventListener('click', function() {
  menuSide.classList.toggle('expandir');
  if (menuSide.classList.contains('expandir')) {
    btnExp.classList.remove('nao-expandir');
    btnExp.classList.add('expandir');
  } else {
    btnExp.classList.remove('expandir');
    btnExp.classList.add('nao-expandir');
  }
});

menuSide.addEventListener('click', function() {
  btnContainer.classList.toggle('menu-expandido');
  textoBotao.classList.toggle('visivel');
  iconBtn.classList.toggle('icone-expandido');
});