const root = document.getElementById('root');

const IsNotLogged = () => {
  console.log('caiu aq app');
  if (!localStorage.getItem('token')) {
    return ` <p>Vocẽ não está logado, por favor volte para a tela de login e coloque suas credenciais</p>`;
  }
};

window.onload = () => {
  root.innerHTML = IsNotLogged();
};
