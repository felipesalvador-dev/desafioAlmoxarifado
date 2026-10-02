import {listarProdutos, buscarProdutoPorId, criarProduto, editarProduto, deletarProduto} from "../models/produto.models.js";

export async function listarProdutosController(req, res) {
    try {
        const produtos = await listarProdutos();

        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao listar produtos",
            erro: error.message
        });
    }
}

export async function buscarProdutoPorIdController(req, res) {
    try {
        const {id} = req.params;

        const produto = await buscarProdutoPorId(id);

        if (!produto){
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }
        
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto",
            error: error.message
        });
    }
}

export async function criarProdutoController(req, res) {
    try {
        const {
            nome,
            valor_unitario,
            quantidade,
            estoque_minimo,
            estoque_maximo,
            id_categoria
        } = req.body;

        if (
            !nome ||
            valor_unitario === undefined ||
            quantidade === undefined ||
            estoque_minimo === undefined ||
            estoque_maximo === undefined ||
            !id_categoria
        ) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios"
            });
        }

        const produto = await criarProduto(
            nome,
            valor_unitario,
            quantidade,
            estoque_minimo,
            estoque_maximo,
            id_categoria
        );

        res.status(201).json({
            mensagem: "Produto criado com sucesso",
            id_produto: produto.insertId
        });

    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar produto",
            erro: error.message
        });
    }
}

export async function editarProdutoController(req, res) {
    try {
        const { id_produto } = req.params;

        const {
            nome,
            valor_unitario,
            quantidade,
            estoque_minimo,
            estoque_maximo,
            id_categoria
        } = req.body;

        const produto = await editarProduto(
            id_produto,
            nome,
            valor_unitario,
            quantidade,
            estoque_minimo,
            estoque_maximo,
            id_categoria
        );

        if (produto.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.status(200).json({
            mensagem: "Produto atualizado com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao editar produto",
            erro: error.message
        });
    }
}

export async function deletarProdutoController(req, res) {
    try {
        const { id_produto } = req.params;

        const produto = await deletarProduto(id_produto);

        if (produto.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.status(200).json({
            mensagem: "Produto deletado com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao deletar produto",
            erro: error.message
        });
    }
}