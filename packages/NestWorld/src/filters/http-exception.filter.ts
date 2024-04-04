import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  LoggerService,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

import * as requestIp from "request-ip";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly logger: LoggerService,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const reponseBody = {
      header: request.headers,
      query: request.query,
      body: request.body,
      params: request.params,
      timestamp: new Date().toISOString(),
      ip: requestIp.getClientIp(request),
      exception: exception["name"],
      error: exception["reponse"] || "Internal Server Error",
    };

    this.logger.error("[toimc]", reponseBody);

    httpAdapter.reply(response, reponseBody, httpStatus);
  }
}
