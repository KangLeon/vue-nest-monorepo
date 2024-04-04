/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:50:01
 * @FilePath: /NestWorld/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { createLogger } from "winston";
import * as winston from "winston";
import {
  WINSTON_MODULE_NEST_PROVIDER,
  WinstonModule,
  utilities,
} from "nest-winston";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix("api/v1");
  const port = 3000;
  await app.listen(port);
}

bootstrap();
