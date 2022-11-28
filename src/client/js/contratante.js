const token = localStorage.getItem('token');
const root = document.getElementById('root');

const IsNotLogged = () => {
  if (!localStorage.getItem('token')) {
    root.innerHTML = ` <p>Vocẽ não está logado, por favor volte para a tela de login e coloque suas credenciais</p>`;
  }
};

window.onload = () => {
  IsNotLogged();
  getRequesterServices();
};

let btnCreateService = document.querySelector('.butaoSolicita');
btnCreateService.addEventListener('click', async function (e) {
  e.preventDefault();
  let container = document.querySelector('#main');
  let loading = document.createElement('h1');
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
    }).then(res => res.json());

    loading.remove();
    alert(response.message);
    window.location.reload();
  } catch (error) {
    alert(error.message);
  }
});

const getRequesterServices = async () => {
  let container = document.querySelector('#main');
  let loading = document.createElement('h1');
  let textloading = document.createTextNode('Carregando...');
  loading.appendChild(textloading);
  container.appendChild(loading);

  const token = localStorage.getItem('token');
  if (!token) return;

  const userTel = JSON.parse(localStorage.getItem('user')).telefone;
  let response;
  try {
    response = await fetch('http://localhost:3003/services/requester', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        tel: userTel,
      },
    }).then(response => response.json());
  } catch (err) {
    console.log(err.message);
  }

  response = response.services.rows;
  localStorage.setItem('servicesAvaiable', JSON.stringify(response));
  loading.remove();
  generateServicosCards();
};

const generateServicosCards = () => {
  const container = document.getElementById('main');
  const cards = JSON.parse(localStorage.getItem('servicesAvaiable'));

  cards?.forEach(currCard => {
    let card = document.createElement('DIV');
    let num_servico_criado = document.createElement('H1');
    let num_servico_criadoT = document.createTextNode(
      `Serviço: ${currCard.num_servico_criado}`
    );
    num_servico_criado.appendChild(num_servico_criadoT);
    card.appendChild(num_servico_criado);
    let bairro = document.createElement('P');
    let bairroT = document.createTextNode(`Bairro: ${currCard.bairro}`);
    bairro.appendChild(bairroT);
    card.appendChild(bairro);
    let cep = document.createElement('P');
    let cepT = document.createTextNode(`CEP: ${currCard.cep}`);
    cep.appendChild(cepT);
    card.appendChild(cep);
    let cidade = document.createElement('P');
    let cidadeT = document.createTextNode(`Cidade: ${currCard.cidade}`);
    cidade.appendChild(cidadeT);
    cidade.appendChild(bairro);
    let comodos = document.createElement('P');
    let comodosT = document.createTextNode(`Cômodos: ${currCard.comodos}`);
    comodos.appendChild(comodosT);
    card.appendChild(comodos);
    let descricao_atividade = document.createElement('P');
    let descricao_atividadeT = document.createTextNode(
      `Descrição: ${currCard.descricao_atividade}`
    );
    descricao_atividade.appendChild(descricao_atividadeT);
    card.appendChild(descricao_atividade);
    let logradouro = document.createElement('P');
    let logradouroT = document.createTextNode(
      `Logradouro ${currCard.logradouro}`
    );
    logradouro.appendChild(logradouroT);
    card.appendChild(logradouro);
    let numero = document.createElement('P');
    let numeroT = document.createTextNode(`Número: ${currCard.numero}`);
    numero.appendChild(numeroT);
    card.appendChild(numero);
    let uf = document.createElement('P');
    let ufT = document.createTextNode(`UF: ${currCard.uf}`);
    uf.appendChild(ufT);
    card.appendChild(uf);
    let valor = document.createElement('P');
    let valorT = document.createTextNode(`Valor: ${currCard.valor}`);
    valor.appendChild(valorT);
    card.appendChild(valor);
    let data_horario = document.createElement('P');
    let data_horarioT = document.createTextNode(
      `Data e Horário: ${new Date(currCard.data_horario).toLocaleString()}`
    );
    data_horario.appendChild(data_horarioT);
    card.appendChild(data_horario);
    card.classList = 'card';
    container.appendChild(card);
  });
};
