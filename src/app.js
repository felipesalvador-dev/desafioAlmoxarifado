import express from "express";

import categoriaRoutes from "./routes/categoria.routes.js";
import produtoRoutes from "./routes/produto.routes.js";
import movimentacaoRoutes from "./routes/movimentacao.routes.js";

const app = express();

app.use(express.json());

app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);
app.use("/movimentacao", movimentacaoRoutes)

export default app;