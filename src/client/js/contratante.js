const token = localStorage.getItem('token');
const root = document.getElementById('root');

const IsNotLogged = () => {
  if (!localStorage.getItem('token')) {
    root.innerHTML = ` <p>Vocẽ não está logado, por favor volte para a tela de login e coloque suas credenciais</p>`;
  }
};

window.onload = () => {
  IsNotLogged();
};

let btnCreateService = document.querySelector('.butaoSolicita');
btnCreateService.addEventListener('click', async function (e) {
  e.preventDefault();
  let container = document.querySelector('#main');
  let loading = document.createElement('P');
  let textloading = document.createTextNode('Carregando...');
  loading.appendChild(textloading);
  container.appendChild(loading);

  const formData = {
    desc: document.querySelector('#desc').value,
    dateTime:
      document.querySelector('#data').value +
      ' ' +
      document.querySelector('#hora').value,
    rooms: parseInt(document.querySelector('#rooms').value),
    value: parseInt(document.querySelector('#valor').value),
    address: {
      cep: document.querySelector('#cep').value,
      logradouro: document.querySelector('#logradouro').value,
      numero: parseInt(document.querySelector('#numero').value),
      complemento: document.querySelector('#complemento').value,
      bairro: document.querySelector('#bairro').value,
      cidade: document.querySelector('#cidade').value,
      uf: document.querySelector('#uf').value,
    },
  };

  try {
    const response = await fetch('http://localhost:3003/services ', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    loading.remove();
    alert(response.message);
  } catch (error) {
    alert(error.message);
  }
});
