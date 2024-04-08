import { User } from "src/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Menus } from "./menu.entity";

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  user: User[];

  @ManyToMany(() => Menus, (menus) => menus.role)
  menus: Menus[];
}
