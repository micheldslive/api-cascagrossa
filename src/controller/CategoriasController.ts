import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Categorias } from "@/entity/Categorias";

export default {
  async all(req: Request, res: Response) {
    try {
      const categorias = await getRepository(Categorias).find()
      return res.status(201).json(categorias);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },
  async one(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const categorias = await getRepository(Categorias).find({
        where: { categoriaid: id }
      });
      return res.status(201).json(categorias);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },

  async CategoryAndProducts(req: Request, res: Response) {
    try {
      const categorias = await getRepository(Categorias).find({ 
        relations: ['produtos']
     })
      return res.status(201).json(categorias);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },

  async create(req: Request, res: Response) {
    try {
      const categoria = req.body;
      await getRepository(Categorias).save(categoria);
      return res.status(201).json({ message: "Categoria cadastrada com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const categoria = req.body;
      await getRepository(Categorias).update(id, categoria);
      return res.status(200).json({ message: "Categoria atualizada com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await getRepository(Categorias).delete(id);
      return res.status(200).json({ message: "Categoria excluida com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
