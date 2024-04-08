/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:18:52
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 18:24:46
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Body, Controller, HttpException, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/signin')
    async signin(@Body() dto: SignInUserDto) { 
        const { username, password } = dto
        const token = await this.authService.signin(username, password)
        
        console.log("🚀 ~ AuthController ~ signin ~ token:", token)
        
        return {
            access_token: token,
        }
    }

    @Post('/signup')
    signup(@Body() dto: SignInUserDto) { 
        const { username, password } = dto
        if (!username || !password) {
            throw new HttpException('用户名或密码不能为空', 400)
        }
        //可以有各种正则校验，但是这个放在前端会不会更好一些？
        if (typeof username !== 'string' || typeof password !== 'string') {
            throw new HttpException('用户名或密码格式不正确', 400)
        }
        if ((typeof password === 'string') && password.length <= 6) {
            throw new HttpException('用户名密码长度必须超过6', 400)
        }
        return this.authService.signup(username, password)
    }
}
