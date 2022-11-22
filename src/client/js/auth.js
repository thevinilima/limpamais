let formRegister = document.querySelector('.sign-up-form');

formRegister.addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const formData = Object.fromEntries(form.entries());

  try {
    const response = await fetch('http://localhost:3003/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    alert(error.message);
  }
});

let formLogin = document.querySelector('#form_login');
formLogin.addEventListener('submit', async function (e) {
  e.preventDefault();
  const loginForm = new FormData(e.target);
  const loginFormData = Object.fromEntries(loginForm.entries());

  parseInt(loginFormData.tel);

  try {
    const response = await fetch('http://localhost:3003/login', {
      method: 'POST',
      body: JSON.stringify(loginFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    localStorage.setItem('token', response);
    alert('Loagdo com sucesso!');
    return response;
  } catch (error) {
    alert(error.message);
  }
});
