import { listarMovimentacoes, buscarMovimentacaoPorId, cadastrarMovimentacao, editarMovimentacao, deletarMovimentacao} from "../models/movimentacao.models.js";

export async function listarMovimentacoesController(req, res) {
    try {
        const movimentacoes = await listarMovimentacoes();

        res.status(200).json(movimentacoes);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao listar movimentações",
            erro: error.message
        });
    }
}

export async function buscarMovimentacaoPorIdController(req, res) {
    try {
        const { id_movimentacao } = req.params;

        const movimentacao = await buscarMovimentacaoPorId(
            id_movimentacao
        );

        if (!movimentacao) {
            return res.status(404).json({
                mensagem: "Movimentação não encontrada"
            });
        }

        res.status(200).json(movimentacao);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar movimentação",
            erro: error.message
        });
    }
}

export async function criarMovimentacaoController(req, res) {
    try {
        const {
            id_produto,
            tipo,
            quantidade,
            valor_unitario
        } = req.body;

        if (
            !id_produto ||
            !tipo ||
            quantidade === undefined ||
            valor_unitario === undefined
        ) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios"
            });
        }

        const movimentacao = await cadastrarMovimentacao(
            id_produto,
            tipo,
            quantidade,
            valor_unitario
        );

        res.status(201).json({
            mensagem: "Movimentação criada com sucesso",
            id_movimentacao: movimentacao.insertId
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar movimentação",
            erro: error.message
        });
    }
}

export async function editarMovimentacaoController(req, res) {
    try {
        const { id_movimentacao } = req.params;

        const {
            id_produto,
            tipo,
            quantidade,
            valor_unitario
        } = req.body;

        const movimentacao = await editarMovimentacao(
            id_movimentacao,
            id_produto,
            tipo,
            quantidade,
            valor_unitario
        );

        if (movimentacao.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Movimentação não encontrada"
            });
        }

        res.status(200).json({
            mensagem: "Movimentação atualizada com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao editar movimentação",
            erro: error.message
        });
    }
}

export async function deletarMovimentacaoController(req, res) {
    try {
        const { id_movimentacao } = req.params;

        const movimentacao = await deletarMovimentacao(
            id_movimentacao
        );

        if (movimentacao.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Movimentação não encontrada"
            });
        }

        res.status(200).json({
            mensagem: "Movimentação deletada com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao deletar movimentação",
            erro: error.message
        });
    }
}