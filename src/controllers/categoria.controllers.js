import { listarCategorias, buscarCategoriaPorId} from "../models/categoria.models.js"

export async function listarCategoriasController(req, res) {
    try {
        const categorias = await listarCategorias();

        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao listar categoria",
            erro: error.message
        });
    }
}

export async function buscarCategoriaPorIdController(req, res) {
    try {
        const {id} = req.params;

        const categoria = await buscarCategoriaPorId(id);

        if (!categoria){
            return res.status(404).json({
                mensagem: "Categoria não encontrada"
            });
        }
        
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar categoria",
            error: error.message
        });
    }
}
