const botaoModal = document.getElementById('criaServico');
botaoModal?.addEventListener('click', function () {
  let modal = document.querySelector('.modalInsercao');

  modal.style.display = 'block';
});

let firstTime = true;
const resetButton = () => {
  const actionButton = document.querySelector('#serviceActionBtn');
  if (!firstTime) {
    actionButton?.removeAttribute('onclick');
    firstTime = false;
  }
  actionButton?.removeAttribute('class');
  actionButton.innerHTML = actionButton.dataset.defaultText;
};
resetButton();

const fecharModal = document.getElementById('fecharX');
fecharModal.addEventListener('click', function () {
  let fechar = document.querySelector('.modalInsercao');

  fechar.style.display = 'none';

  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
  resetButton();
});

const criaSolicitacao = document.getElementById('criaSolicitacao');
criaSolicitacao?.addEventListener('click', function () {
  let fechar = document.querySelector('.modalInsercao');

  fechar.style.display = 'none';
});
