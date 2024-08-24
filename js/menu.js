document.addEventListener("DOMContentLoaded", function(event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId),
            botao = document.getElementById('botao');

      // Validate that all variables exist
      if(toggle && nav && bodypd && headerpd){
          toggle.addEventListener('click', ()=>{
              // mostrar navbar
              nav.classList.toggle('show');
              // mudar icon
              toggle.classList.toggle('bx-x');
              // adicionar padding no body
              bodypd.classList.toggle('body-pd');
              // adicionar padding no header
              headerpd.classList.toggle('body-pd');
              // Adicionar ou remover a classe de botao expandido
              botao.classList.toggle('botao-expandido');
              toggle.classList.toggle('bi-chevron-right');
              toggle.classList.toggle('bi-chevron-left');

              if (nav.classList.contains('show')) {
                  // Se o menu for expandido, adicione o texto
                  if (!botao.querySelector('span')) {
                      const btnText = document.createElement('span');
                      btnText.textContent = 'Novo';
                      botao.appendChild(btnText);
                  }
              } else {
                  // Se o menu for recolhido, remova o texto, se existir
                  const btnText = botao.querySelector('span');
                  if (btnText) {
                      btnText.remove();
                  }
              }
          });
          
      }
  }

  showNavbar('header-toggle','nav-bar','body-pd','header');

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link');

  function colorLink(){
      if(linkColor){
          linkColor.forEach(l=> l.classList.remove('active'));
          this.classList.add('active');
      }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink));
});
