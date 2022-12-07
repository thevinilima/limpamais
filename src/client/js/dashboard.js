const botaoModal1 = document.getElementById("botaoServicosCriados");
const botaoModal2 = document.getElementById("botaoUsuariosAtivos");
const botaoModal3 = document.getElementById("botaoDiaristaAtivos");
const botaoModal4 = document.getElementById("botaoAvaliacoes");
const botaoModal5 = document.getElementById("botaoValidacaoPagamentos");


botaoModal1.addEventListener("click", function (){


    let modal = document.querySelector('#modalServicosCriados');

    modal.style.display = 'block';
});

botaoModal2.addEventListener("click", function (){


    let modal = document.querySelector('#modalUsuariosAtivos');

    modal.style.display = 'block';
});

botaoModal3.addEventListener("click", function (){


    let modal = document.querySelector('#modalDiaristaAtivos');

    modal.style.display = 'block';
});

botaoModal4.addEventListener("click", function (){


    let modal = document.querySelector('#modalAvaliacoes');

    modal.style.display = 'block';
});

botaoModal5.addEventListener("click", function (){


    let modal = document.querySelector('#modalValidacaoPagamentos');

    modal.style.display = 'block';
});




const fecharModal = document.getElementById("fexa");

fecharModal.addEventListener("click", function (){


    let fechar = document.querySelector('#modalServicosCriados');

    fechar.style.display = 'none';
});

const fecharModal2 = document.getElementById("fexa2");

fecharModal2.addEventListener("click", function (){


    let fechar = document.querySelector('#modalUsuariosAtivos');

    fechar.style.display = 'none';
});

const fecharModal3 = document.getElementById("fexa3");

fecharModal3.addEventListener("click", function (){


    let fechar = document.querySelector('#modalDiaristaAtivos');

    fechar.style.display = 'none';
});

const fecharModal4 = document.getElementById("fexa4");

fecharModal4.addEventListener("click", function (){


    let fechar = document.querySelector('#modalAvaliacoes');

    fechar.style.display = 'none';
});

const fecharModal5 = document.getElementById("fexa5");

fecharModal5.addEventListener("click", function (){


    let fechar = document.querySelector('#modalValidacaoPagamentos');

    fechar.style.display = 'none';
});




