const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const inputs = document.querySelectorAll('input[name="user-type"]');
const cpf = document.querySelector("#cpf");
const cnpj = document.querySelector("#cnpj");
const form = document.getElementById("form_login");
const username = document.getElementById("telefone");
const password = document.getElementById("password");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

inputs.forEach((input) => input.addEventListener("change", change));

const userTypes = {
  diarista: () => {
    cpnj.classList.add("hidden");
    cpf.classList.remove("hidden");
  },
  cpf: () => {
    cpnj.classList.add("hidden");
    cpf.classList.remove("hidden");
  },
  cnpj: () => {
    cpnj.classList.remove("hidden");
    cpf.classList.add("hidden");
  },
  
};

function change(event) {
  const value = event.target.value;
  userTypes[value]();
}

function login_form(event) {
  event.preventDefault();
  console.log(event);
}
function register_form(event) {
  event.preventDefault();
}