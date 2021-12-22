import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "./Produtos";

@Entity("categorias", { schema: "cascagrossa" })
export class Categorias {
  @PrimaryGeneratedColumn({ type: "int", name: "categoriaid" })
  categoriaid: number;

  @Column("varchar", { name: "categoria", length: 100, default: () => "''" })
  categoria: string;

  @JoinColumn({
    name: 'categoriaid',
  })
  @OneToMany(() => Produtos, produto => produto.categoria)
  produtos: Produtos[];
}
