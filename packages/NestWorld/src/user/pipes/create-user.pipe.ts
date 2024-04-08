/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 16:35:05
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 16:45:51
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/user/pipes/create-user.pipe.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    if (value.roles && value.roles instanceof Array && value.roles.length > 0) {
      if (value.roles[0]['id']) {
        value.roles = value.roles.map((role) => role.id)
      }
    }
    return value;
  }
}
