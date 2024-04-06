/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:27:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-06 13:20:59
 * @FilePath: /project/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

export const breadcrumbNameMap: Record<string, string> = {
    '/home': '首页',
    '/home/dashboard': '概览',
    '/home/users': '用户列表',
    '/home/roles': '角色管理',
    '/home/menus': '菜单列表',
}

export const routes = [{
    path: '/login',
    component: () => import('@/views/login/login.vue'),
},{
    path: '/reg',
    component: () => import('@/views/login/reg.vue'),
}, {
    path: "/home",
    component: () => import('@/layout/default.vue'),
    redirect: 'home/dashboard',
    children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
    },{
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
    },{
        path: 'menus',
        name: 'menus',
        component: () => import('@/views/menus/index.vue')
    },{
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
    }]
    }] as RouteRecordRaw[];



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function setupRouter(app: App<Element>) { 
    app.use(router);
}