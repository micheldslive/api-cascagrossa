import { Router } from "express";
import Produtos from "@/controller/ProdutosController";
import Categorias from "@/controller/CategoriasController";
import Imagens from "@/controller/ImagensController";

const routes = Router();

//Routes produtos
routes.post("/produtos", Produtos.create);
routes.get("/produtos", Produtos.all);
routes.get("/produtos/:id", Produtos.one);
routes.get("/produtos/categoria/:id", Produtos.allByCategory);
routes.put("/produtos/:id", Produtos.update);
routes.delete("/produtos/:id", Produtos.delete);

//Routes categorias
routes.post("/categorias", Categorias.create);
routes.get("/categorias", Categorias.all);
routes.get("/categorias/produtos", Categorias.CategoryAndProducts);
routes.get("/categorias/:id", Categorias.one);
routes.put("/categorias/:id", Categorias.update);
routes.delete("/categorias/:id", Categorias.delete);

//Routes Imagens
routes.post("/imagens", Imagens.create);
routes.get("/imagens", Imagens.all);
routes.get("/imagens/produto/:id", Imagens.allByProduct);
routes.get("/imagens/:id", Imagens.one);
routes.put("/imagens/:id", Imagens.update);
routes.delete("/imagens/:id", Imagens.delete);

export default routes;