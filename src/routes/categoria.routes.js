import { Router } from "express";

import {
    listarCategoriasController,
    buscarCategoriaPorIdController
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", listarCategoriasController);
router.get("/:id", buscarCategoriaPorIdController);

export default router;