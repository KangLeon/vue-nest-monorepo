/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-09 14:36:56
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
import { Logger, ValidationPipe } from "@nestjs/common";
import { AllExceptionFilter } from "./filters/all-exception.filter";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix("api/v1");

  //设置全局filter
  const httpAdapter = app.get(HttpAdapterHost)
  const logger = new Logger()
  app.useGlobalFilters(new AllExceptionFilter(logger, httpAdapter))

  //全局拦截器
  app.useGlobalPipes(new ValidationPipe())

  //限流
  app.use(helmet())
  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000,
      max: 100,
    })
  )

  const port = 3000;
  await app.listen(port);
}

bootstrap();
