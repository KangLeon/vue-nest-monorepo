import { defineStore } from "pinia";

/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 19:14:46
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 19:16:08
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/store/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//如何更新与保存token状态
export const useUserStore = defineStore('users', {
    state: () => ({ 
        token: '',
    }),
    persist: true,
})  