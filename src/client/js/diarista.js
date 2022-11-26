const botaoModal = document.getElementById('criaServico');

botaoModal.addEventListener('click', function () {
  window.location.reload();
});

window.onload = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  const response = await fetch('http://localhost:3003/services', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    res = res.rows;
    res.status(200).json(response);
  });

  localStorage.setItem('user', JSON.stringify(user));
};
