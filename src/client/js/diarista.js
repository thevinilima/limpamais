window.onload = async () => {
  const container = document.getElementById('container-servicos');
  let img = document.createElement('IMG');
  img.setAttribute('src', '../imgs/loading-gif.gif');
  container.appendChild(img);

  const token = localStorage.getItem('token');
  if (!token) return;

  let response;
  try {
    response = await fetch('http://localhost:3003/services', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  } catch (err) {
    console.log(err.message);
  }

  response = response.services.rows;
  localStorage.setItem('servicesAvaiable', JSON.stringify(response));
  img.remove();
  generateServicosCards();
};

const generateServicosCards = () => {
  const container = document.getElementById('container-servicos');
  const cards = JSON.parse(localStorage.getItem('servicesAvaiable'));

  for (let i = 0; cards.length; i++) {
    let card = document.createElement('DIV');
    let num_servico_criado = document.createElement('H1');
    let num_servico_criadoT = document.createTextNode(
      `Serviço: ${cards[i].num_servico_criado}`
    );
    num_servico_criado.appendChild(num_servico_criadoT);
    card.appendChild(num_servico_criado);
    let bairro = document.createElement('P');
    let bairroT = document.createTextNode(`Bairro: ${cards[i].bairro}`);
    bairro.appendChild(bairroT);
    card.appendChild(bairro);
    let cep = document.createElement('P');
    let cepT = document.createTextNode(`CEP: ${cards[i].cep}`);
    cep.appendChild(cepT);
    card.appendChild(cep);
    let cidade = document.createElement('P');
    let cidadeT = document.createTextNode(`Cidade: ${cards[i].cidade}`);
    cidade.appendChild(cidadeT);
    cidade.appendChild(bairro);
    let comodos = document.createElement('P');
    let comodosT = document.createTextNode(`Cômodos: ${cards[i].comodos}`);
    comodos.appendChild(comodosT);
    card.appendChild(comodos);
    let descricao_atividade = document.createElement('P');
    let descricao_atividadeT = document.createTextNode(
      `Descrição: ${cards[i].descricao_atividade}`
    );
    descricao_atividade.appendChild(descricao_atividadeT);
    card.appendChild(descricao_atividade);
    let logradouro = document.createElement('P');
    let logradouroT = document.createTextNode(
      `Logradouro ${cards[i].logradouro}`
    );
    logradouro.appendChild(logradouroT);
    card.appendChild(logradouro);
    let numero = document.createElement('P');
    let numeroT = document.createTextNode(`Número: ${cards[i].numero}`);
    numero.appendChild(numeroT);
    card.appendChild(numero);
    let uf = document.createElement('P');
    let ufT = document.createTextNode(`UF: ${cards[i].uf}`);
    uf.appendChild(ufT);
    card.appendChild(uf);
    let valor = document.createElement('P');
    let valorT = document.createTextNode(`Valor: ${cards[i].valor}`);
    valor.appendChild(valorT);
    card.appendChild(valor);
    let data_horario = document.createElement('P');
    let data_horarioT = document.createTextNode(
      `Data e Horário: ${cards[i].data_horario}`
    );
    data_horario.appendChild(data_horarioT);
    card.appendChild(data_horario);
    card.classList = 'card';
    container.appendChild(card);
  }
};
