const botoesAbrir = document.querySelectorAll(".solucao-botao");
const botoesFechar = document.querySelectorAll(".solucao-fechar");

botoesAbrir.forEach((botao) => {

    botao.addEventListener("click", () => {

        const solucao = botao.closest(".solucao");

        solucao.classList.add("ativo");

    });

});


botoesFechar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const solucao = botao.closest(".solucao");

        solucao.classList.remove("ativo");

    });

});