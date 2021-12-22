import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Produtos } from "./Produtos";

@Index("produtoid", ["produtoid"], {})
@Entity("imagens", { schema: "cascagrossa" })
export class Imagens {
  @PrimaryGeneratedColumn({ type: "int", name: "imgid" })
  imgid: number;

  @Column("varchar", { name: "url", length: 100 })
  url: string;

  @Column("int", { name: "produtoid" })
  produtoid: number;

  @ManyToOne(
    () => Produtos,
    (produtos) => produtos.imagens,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "produtoid", referencedColumnName: "produtoid" }])
  produto: Produtos;
}
