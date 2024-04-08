/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-02-01 22:25:23
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 16:27:21
 * @FilePath: /NestWorld/src/user/user.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Logs } from "./logs.entity";
import { Roles } from "./roles.entity";
import { Profile } from "./profile.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Exclude()//可以把这个字段过滤
  password: string;

  @OneToMany(() => Logs, (logs) => logs.user, {cascade: true})
  logs: Logs[];

  @ManyToMany(() => Roles, (roles) => roles.user, {cascade: ['insert']})
  @JoinTable({name: 'user_roles'})
  roles: Roles[];

  @OneToOne(() => Profile, (profile) => profile.user, {cascade: true})
  profile: Profile;
}
