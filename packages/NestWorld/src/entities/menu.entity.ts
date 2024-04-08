/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 23:31:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 23:39:49
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/entities/menu.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./roles.entity";

@Entity()
export class Menus { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    path: string

    @Column()
    order: number

    @Column()
    acl: string

    @ManyToMany(() => Roles, (roles) => roles.menus)
    @JoinTable({
        name: 'role_menus'
    })
    role:Roles
}
