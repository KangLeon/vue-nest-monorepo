/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-02-01 22:40:18
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 13:59:02
 * @FilePath: /NestWorld/src/user/profile.entiry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { User } from "src/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: number;

  @Column()
  photo: string;

  @Column()
  address: string;

  @OneToOne(() => User,{ onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
