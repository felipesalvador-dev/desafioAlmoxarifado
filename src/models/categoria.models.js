import { conexão } from "../config/db.js";

export async function listarCategorias() {
    const [categoria] = await conexão.query(
        "SELECT * FROM categoria"
    )

    return categoria;
};

export async function buscarCategoriaPorId(id_categoria) {
    const [categoria] = await conexão.query(
        "SELECT * from categoria WHERE id_categoria = ?",
        [id_categoria]
    )

    return categoria;
};



