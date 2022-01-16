import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Produtos } from "@/entity/Produtos";

export default {
  async all(req: Request, res: Response) {
    try {
      const produtos = await getRepository(Produtos).find({ 
        relations: ['imagens', 'categoria']
     })
      return res.status(201).json(produtos);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },
  async one(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produtos = await getRepository(Produtos).find({
        where: { produtoid: id },
        relations: ['imagens', 'categoria']
      });
      return res.status(201).json(produtos);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },
  async allByCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produtos = await getRepository(Produtos).find({
        where: { categoryid: id },
        relations: ['imagens', 'categoria']
      });
      return res.status(201).json(produtos);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const produto = req.body;
      await getRepository(Produtos).save(produto);
      return res.status(201).json({ message: "Produto cadastrado com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produto = req.body;
      await getRepository(Produtos).update(id, produto);
      return res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await getRepository(Produtos).delete(id);
      return res.status(200).json({ message: "Produto excluido com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
