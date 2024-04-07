/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:18:23
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 15:30:43
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signin(username: string, password: string) { }
    signup(username: string, password: string) { }
}
