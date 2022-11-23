const loadUserData = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const { user } = await fetch("http://localhost:3003/users/current", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => JSON.parse(localStorage.getItem('user'))

const display = document.querySelector('#username')
display.innerHTML = getUser().nome
