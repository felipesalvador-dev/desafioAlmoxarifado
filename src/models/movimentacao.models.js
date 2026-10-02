import { conexão } from "../config/db.js";

export async function listarMovimentacoes() {
    const [movimentacoes] = await conexão.query(
        "SELECT * FROM movimentacao"
    )
    return movimentacoes
};

export async function buscarMovimentacaoPorId(id_movimentacao) {
    const [movimentacao] = await conexão.query(
        "SELECT * from produto WHERE id_movimentacao = ?",
        [id_movimentacao]
    )

    return movimentacao;
};

export async function cadastrarMovimentacao(
    id_produto,
    tipo,
    quantidade,
    valor_unitario
) {
    const [resultado] = await conexão.query(
        `INSERT INTO movimentacao
        (id_produto, tipo, quantidade, valor_unitario)
        VALUES (?, ?, ?, ?)`,
        [
            id_produto,
            tipo,
            quantidade,
            valor_unitario
        ]
    );

    return resultado;
}

export async function editarMovimentacao(
    id_movimentacao,
    id_produto,
    tipo,
    quantidade,
    valor_unitario
) {
    const [movimentacao] = await conexão.query(
        `UPDATE movimentacao
        SET id_produto = ?,
            tipo = ?,
            quantidade = ?,
            valor_unitario = ?
        WHERE id_movimentacao = ?`,
        [
            id_produto,
            tipo,
            quantidade,
            valor_unitario,
            id_movimentacao
        ]
    );

    return movimentacao;
};

export async function deletarMovimentacao(id_movimentacao) {
    const [movimentacao] = await conexão.query(
        "DELETE FROM produto WHERE id_movimentacao = ?",
        [id_movimentacao]
    );
    return movimentacao;
}