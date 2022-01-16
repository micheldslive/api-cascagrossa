import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Imagens } from "./Imagens";
import { Categorias } from "./Categorias";

@Entity("produtos")
export class Produtos {
  @PrimaryGeneratedColumn({ type: "int", name: "produtoid" })
  produtoid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("double", { name: "old", precision: 22, default: () => "'0'" })
  old: number;

  @Column("double", { name: "price", precision: 22, default: () => "'0'" })
  price: number;

  @Column("int", { name: "categoriaid" })
  categoriaid: number;

  @Column("varchar", { name: "mark", length: 100 })
  mark: string;

  @Column("varchar", { name: "condition", length: 100 })
  condition: string;

  @Column("varchar", { name: "shortDesc", length: 100 })
  shortDesc: string;

  @Column("text", { name: "Desc" })
  desc: string;

  @Column("int", { name: "inCart", default: () => "'0'" })
  inCart: number;

  @Column("int", { name: "count", default: () => "'0'" })
  count: number;

  @Column("int", { name: "total", default: () => "'0'" })
  total: number;

  @OneToMany(() => Imagens, (imagens) => imagens.produto)
  imagens: Imagens[];

  @ManyToOne(() => Categorias, (categorias) => categorias.produtos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "categoriaid", referencedColumnName: "categoriaid" }])
  categoria: Categorias;
}
