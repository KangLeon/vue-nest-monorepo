/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-05 04:05:27
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-06 15:13:31
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/types/User.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Profile { 
    id: number
    gender: number
    address: string
    photo: string
}

export interface RoleItem { 
    id: number
    name: string
}

export interface UserItem { 
    id: number
    key: string
    username: string
    profile: Profile
    role: RoleItem[]
}