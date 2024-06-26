/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 18:09:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 20:22:58
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 11:46:44
 * @FilePath: /NestWorld/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Global, Logger, Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LogsModule } from "./logs/logs.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration";
import * as Joi from "joi";
import { connectionParams } from "ormconfig";
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from "@nestjs/core";
import { AdminGuard } from "./guards/admin.guard";
import { RolesModule } from './roles/roles.module';
import { MenusModule } from './menus/menus.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      //joi配置校验
      validationSchema: Joi.object({}),
    }),
    LogsModule,
    TypeOrmModule.forRoot(connectionParams),
    UserModule,
    AuthModule,
    RolesModule,
    MenusModule,
  ],
  controllers: [],
  providers: [
    Logger,
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    }],
  exports: [Logger],
})
export class AppModule {}
