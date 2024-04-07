/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 15:17:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 15:33:43
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/auth.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
