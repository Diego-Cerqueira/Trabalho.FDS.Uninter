let botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", e=>{
mensagem.innerHTML = "Todo homem é um tolo por pelo menos cinco minutos todos os dias, a sabedoria consiste em não exceder esse limite. — Elbert Hubbard ";
});
