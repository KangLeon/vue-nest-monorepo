
/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 16:30:07
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 17:05:53
 * @FilePath: /project/src/store/menus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { MenuItem } from "@/types/SiderBarNav";

export const userMenuStore = defineStore('menu', {
    state: () => ({
        menus: [
            {
                id: 1,
                name: '首页',
                path: 'dashboard',
            },
            {
                id: 2,
                name: '用户管理',
                path: 'users',
                routeName: 'users',
            },
            {
                id: 3, 
                name: '角色管理',
                path: 'roles',
                routeName: 'roles',
            },
            {
                id: 4,
                name: '菜单管理',
                path: 'menus',
                routeName: 'menus',
            },
        ] as MenuItem[]
    })
})