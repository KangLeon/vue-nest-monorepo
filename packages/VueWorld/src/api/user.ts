/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 17:25:45
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 17:28:50
 * @FilePath: /vue-nest-monorepo/packages/VueWorld/src/api/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "@/utils/axios";

export const getAllUsers = () => axios.get('/user/getUsers')