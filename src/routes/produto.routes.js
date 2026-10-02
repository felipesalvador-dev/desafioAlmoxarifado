import { Router } from "express";

import {
    listarProdutosController,
    buscarProdutoPorIdController,
    criarProdutoController,
    editarProdutoController,
    deletarProdutoController
} from "../controllers/produto.controllers.js";

const router = Router();

router.get("/", listarProdutosController);
router.get("/:id_produto", buscarProdutoPorIdController);
router.post("/", criarProdutoController);
router.put("/:id_produto", editarProdutoController);
router.delete("/:id_produto", deletarProdutoController);

export default router;