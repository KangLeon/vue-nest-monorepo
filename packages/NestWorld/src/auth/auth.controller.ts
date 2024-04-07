/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:18:52
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 15:31:50
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/signin')
    signin(@Body() dto: any) { 
        const { username, password } = dto
        return this.authService.signin(username, password)
    }

    @Post('/signup')
    signup(@Body() dto: any) { 
        const { username, password } = dto
        return this.authService.signup(username, password)
    }
}
