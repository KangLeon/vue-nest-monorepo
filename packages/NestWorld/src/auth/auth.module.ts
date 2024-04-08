/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:17:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 10:09:13
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';

@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (ConfigService: ConfigService) => ({
      secret: ConfigService.get<string>(ConfigEnum.SECRET),
      signOptions: {
        expiresIn: '1d',
      }
    }),
    inject: [ConfigService]
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
