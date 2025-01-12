async function buscaProduto() {
    let conexao = await fetch("http://localhost:3000/produtos");
    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem){
    let conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id){
    await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
    });
}

export const conectaAPI = {
    buscaProduto,
    criaProduto,
    deletaProduto,
}