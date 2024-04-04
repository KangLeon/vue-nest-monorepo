/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-04 22:40:51
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 22:47:57
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/filters/all-exception.filter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ExceptionFilter,
  HttpException,
  HttpStatus,
  LoggerService,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ArgumentsHost, Catch } from '@nestjs/common';

import * as requestIp from 'request-ip';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly logger: LoggerService,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      headers: request.headers,
      query: request.query,
      body: request.body,
      params: request.params,
      timestamp: new Date().toISOString(),
      // 还可以加入一些用户信息
      // IP信息
      ip: requestIp.getClientIp(request),
      exceptioin: exception['name'],
      error: exception['response'] || 'Internal Server Error',
    };

    this.logger.error('[toimc]', responseBody);
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
