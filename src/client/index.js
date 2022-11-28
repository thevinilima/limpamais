const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const inputs = document.querySelectorAll('input[name="user-type"]');
const cpfContainer = document.querySelector('#cpf');
const cnpjContainer = document.querySelector('#cnpj');
const cpfInput = document.querySelector('#cpf input');
const cnpjInput = document.querySelector('#cnpj input');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

inputs.forEach(input => input.addEventListener('change', change));

const userTypes = {
  diarista: () => {
    cnpjContainer.classList.add('hidden');
    cnpjInput.setAttribute('disabled', true);
    cpfContainer.classList.remove('hidden');
    cpfInput.removeAttribute('disabled');
  },
  cpf: () => {
    cnpjContainer.classList.add('hidden');
    cnpjInput.setAttribute('disabled', true);
    cpfContainer.classList.remove('hidden');
    cpfInput.removeAttribute('disabled');
  },
  cnpj: () => {
    cpfContainer.classList.add('hidden');
    cpfInput.setAttribute('disabled', true);
    cnpjContainer.classList.remove('hidden');
    cnpjInput.removeAttribute('disabled');
  },
};

function change(event) {
  const value = event.target.value;
  userTypes[value]();
}

function login_form(event) {
  event.preventDefault(event);
  console.log(event);
}
function register_form(event) {
  event.preventDefault(event);
}
