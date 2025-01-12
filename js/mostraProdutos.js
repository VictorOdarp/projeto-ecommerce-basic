import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

export async function constroiProduto(nome, preco, imagem, id) {
    const produto = document.createElement("article");
    produto.className = "produto__item";
    produto.setAttribute("data-id", id);
    produto.innerHTML = 
            `<article class="container__produtos__conteudo">
                <div class="produto__imagem">
                    <img src="${imagem}" alt="${nome}">
                </div>

                <div class="produto__descricao">
                    <h2>${nome}</h2>
                </div>

                <div class="produto__preco"> 

                    <div class="produto__preco__valor">
                        <p>R$ ${preco}</p>
                    </div>

                    <div class="produto__preco__botao">
                        <i class="fa-solid fa-trash delete__icon"></i>
                    </div>
                </div>
            </article>`;

    return produto;
}

async function mostraProdutos() {
    const produtos = await conectaAPI.buscaProduto();

    produtos.forEach(async (produto) => {
        const produtoConstruido = await constroiProduto(produto.nome, produto.preco, produto.imagem, produto.id);
        lista.appendChild(produtoConstruido);
    });
}

mostraProdutos();

