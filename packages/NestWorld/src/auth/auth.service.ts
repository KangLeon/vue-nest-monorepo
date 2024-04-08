/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:18:23
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 10:56:02
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserQuery } from 'src/user/dto/get-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwt: JwtService) { }

    async signin(username: string, password: string) { 
        const user = await this.userService.findUsername(username)

        if (user && user.password == password) {
            return await this.jwt.signAsync({
                username: user.username,
                sub: user.id,
            })
        }
        
        return new UnauthorizedException()
    }
    
    async signup(username: string, password: string) { 
        const res = await this.userService.create({
            username,
            password,
        })
    }
}
