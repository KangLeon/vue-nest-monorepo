/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 20:20:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 22:51:19
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/roles/dto/update-role.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PartialType } from '@nestjs/mapped-types'
import { CreateRoleDto } from './create-role.dto'

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
