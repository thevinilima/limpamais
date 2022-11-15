
const botaoModal = document.getElementById("criaServico");

botaoModal.addEventListener("click", function (){


    let modal = document.querySelector('.modalInsercao');

    modal.style.display = 'block';
});


const fecharModal = document.getElementById("fecharX");

fecharModal.addEventListener("click", function (){


    let fechar = document.querySelector('.modalInsercao');

    fechar.style.display = 'none';
});


const criaSolicitacao = document.getElementById("criaSolicitacao");

criaSolicitacao.addEventListener("click", function (){


    let fechar = document.querySelector('.modalInsercao');

    fechar.style.display = 'none';
});
