/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 21:07:45
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 21:08:01
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/user/dto/get-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface UserQuery { 
  page: number
  limit?: number
  username?: string
  role?: number //select 下拉框
  gender: number
}