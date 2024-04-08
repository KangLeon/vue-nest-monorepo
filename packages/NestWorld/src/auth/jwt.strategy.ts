/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 10:10:55
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 10:41:39
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/jwt.strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigEnum } from "src/enum/config.enum";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(protected configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>(ConfigEnum.SECRET),
        })
    }

    async validate(payload: any) { 
        return { userId: payload.sub, username: payload.username };
    }
}