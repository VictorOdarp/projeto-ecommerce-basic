import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

async function deletaProduto(evento) {
    evento.preventDefault();
    const botaoClicado = evento.target;

    if (botaoClicado.tagName === "I" && botaoClicado.classList.contains("delete__icon")) {
        const produto = botaoClicado.closest(".produto__item");
        const id = produto.getAttribute("data-id");

        console.log(produto);

        await conectaAPI.deletaProduto(id);
        produto.remove();
    }
}

lista.addEventListener("click", evento => deletaProduto(evento));