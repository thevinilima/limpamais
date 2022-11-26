const root = document.getElementById('root');

const IsNotLogged = () => {
  if (!localStorage.getItem('token')) {
    root.innerHTML = ` <p>Vocẽ não está logado, por favor volte para a tela de login e coloque suas credenciais</p>`;
  }
};

window.onload = () => {
  IsNotLogged();
};
