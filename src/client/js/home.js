const botaoModal = document.getElementById('criaServico');
botaoModal?.addEventListener('click', function () {
  let modal = document.querySelector('.modalInsercao');

  modal.style.display = 'block';
});

const fecharModal = document.getElementById('fecharX');
fecharModal.addEventListener('click', function () {
  let fechar = document.querySelector('.modalInsercao');

  fechar.style.display = 'none';

  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
  const button = document.querySelector('#serviceActionBtn');
  button?.removeAttribute('onclick');
  button?.removeAttribute('class');
  button.innerHTML = button.dataset.defaultText;
});

const criaSolicitacao = document.getElementById('criaSolicitacao');
criaSolicitacao?.addEventListener('click', function () {
  let fechar = document.querySelector('.modalInsercao');

  fechar.style.display = 'none';
});
