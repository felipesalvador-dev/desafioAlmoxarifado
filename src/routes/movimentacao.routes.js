import { Router } from "express";

import {
    listarMovimentacoesController,
    buscarMovimentacaoPorIdController,
    criarMovimentacaoController,
    editarMovimentacaoController,
    deletarMovimentacaoController
} from "../controllers/movimentacao.controllers.js";

const router = Router();

router.get("/", listarMovimentacoesController);
router.get("/:id_produto", buscarMovimentacaoPorIdController);
router.post("/", criarMovimentacaoController);
router.put("/:id_produto", editarMovimentacaoController);
router.delete("/:id_produto", deletarMovimentacaoController);

export default router;