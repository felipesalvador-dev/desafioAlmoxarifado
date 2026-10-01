import { conexão } from "../config/db.js";


export async function listarProdutos() {
    const [produto] = await conexão.query(
        "SELECT * FROM produto"
    )

    return produto;
};

export async function buscarProdutoPorId(id_produto) {
    const [produto] = await conexão.query(
        "SELECT * from produto WHERE id_produto = ?",
        [id_produto]
    )

    return produto;
};

export async function criarProduto(nome, valor_unitario, quantidade, estoque_minimo, estoque_maximo, id_categoria) {
    const [produto] = await conexão.query(
        `INSERT INTO produto (nome, valor_unitario, quantidade, estoque_minimo, estoque_maximo, id_categoria) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            nome,
            valor_unitario,
            quantidade,
            estoque_minimo,
            estoque_maximo,
            id_categoria
        ]
    );

    return produto;
};

export async function editarProduto(id_produto, nome, valor_unitario, quantidade, estoque_minimo, estoque_maximo, id_categoria) {
    const [produto] = await conexão.query(
        `UPDATE produto
        SET nome = ?,
        valor_unitario = ?,
        quantidade = ?,
        estoque_minimo = ?,
        estoque_maximo = ?,
        id_categoria = ?,
        WHERE id_produto = ?`,
      [
        nome,
        valor_unitario,
        quantidade,
        estoque_minimo,
        estoque_maximo,
        id_categoria,
        id_produto
      ]  
    );
    return produto;
}

export async function deletarProduto(id_produto) {
    const [produto] = await conexão.query(
        "DELETE FROM produto WHERE id_produto = ?",
        [id_produto]
    );
    return produto;
}