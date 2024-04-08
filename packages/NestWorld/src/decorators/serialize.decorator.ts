/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 16:50:09
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 16:52:04
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/decorators/serialize.decorator.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { UseInterceptors } from "@nestjs/common"
import { SerializeInterceptor } from "src/interceptors/serialize.interceptor"

interface ClassConstructor { 
    new (...args: any[]): any
}

export function Serialize(dto: ClassConstructor) { 
    return UseInterceptors(new SerializeInterceptor(dto))
}