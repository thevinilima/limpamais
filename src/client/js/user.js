const loadUserData = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  const { user } = await fetch(
    'https://limpa-api-production-436c.up.railway.app/users/current',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  ).then(res => res.json());

  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => JSON.parse(localStorage.getItem('user'));

const user = getUser();
if (user) {
  const display = document.querySelector('#username-display');
  display.innerHTML = getUser()?.nome;
}
