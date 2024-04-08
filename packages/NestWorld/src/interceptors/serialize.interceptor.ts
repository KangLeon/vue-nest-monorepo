/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 16:02:30
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 16:53:54
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/interceptors/serialize.interceptor.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log('这里在拦截器执行之前')
    return next.handle().pipe(
      map((data) => { 
        console.log('这里在拦截器执行之后')
        return plainToInstance(this.dto, data, {
          //设置为true之后，所有经过给拦截器的接口都需要设置Expose或Exclude
          excludeExtraneousValues: true,
        })
      })
    )
  }
}
