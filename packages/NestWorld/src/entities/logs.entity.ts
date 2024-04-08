/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-02-01 22:52:27
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 23:16:59
 * @FilePath: /NestWorld/src/logs/logs.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  path: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  methods: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  data: string;

  @Column()
  result: number;

  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn()
  user: User;
}
