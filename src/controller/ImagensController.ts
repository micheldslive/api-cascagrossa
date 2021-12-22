import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Imagens } from "@/entity/Imagens";

export default {
  async all(req: Request, res: Response) {
    try {
      const imagens = await getRepository(Imagens).find();
      return res.status(201).json(imagens);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },
  async one(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const imagens = await getRepository(Imagens).find({
        where: { id }
      });
      return res.status(201).json(imagens);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },

  async create(req: Request, res: Response) {
    try {
      const imagem = req.body;
      await getRepository(Imagens).save(imagem);
      return res.status(201).json({ message: "Imagem cadastrada com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async allByProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const imagens = await getRepository(Imagens).find({
        where: { produtoid: id }
      });
      return res.status(201).json(imagens);
    } catch (error) {
      return res.status(404).json(`Erro no banco: ${error}`);
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const imagem = req.body;
      await getRepository(Imagens).update(id, imagem);
      return res.status(200).json({ message: "Imagem atualizada com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await getRepository(Imagens).delete(id);
      return res.status(200).json({ message: "Imagem excluida com sucesso" });
    } catch (error) {
      return res.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
