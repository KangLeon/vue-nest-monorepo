/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:18:23
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 18:55:34
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ForbiddenException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserQuery } from 'src/user/dto/get-user.dto';
import { UserService } from 'src/user/user.service';
import * as argon2  from 'argon2'

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwt: JwtService) { }

    async signin(username: string, password: string) { 
        const user = await this.userService.findUsername(username)
        
        console.log("🚀 ~ AuthService ~ signin ~ user:", user)

        if (!user) {
            throw new ForbiddenException('用户不存在，请注册')
        }

        //进行密码比对
        const isPasswordValid = await argon2.verify(user.password, password)

        if (!isPasswordValid) { 
            throw new ForbiddenException('用户名或密码错误')
        }

        try {
            return await this.jwt.signAsync({
                username: user.username,
            });
        } catch (error) {
            console.error('Error generating JWT:', error);
            throw new InternalServerErrorException('Error generating JWT');
        }
    }
    
    async signup(username: string, password: string) { 
        const user = await this.userService.findUsername(username)
        if (user) {
            throw new ForbiddenException('用户名已经存在')
        }

        const res = await this.userService.create({
            username,
            password,
        })

        return res
    }
}
