import { IsNotEmpty, IsString, Length } from "class-validator"
import { Roles } from "src/entities/roles.entity"

/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 16:43:01
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-07 16:43:32
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/user/dto/create-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class CreateUserDto { 
    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    username: string

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string

    roles?: Roles[] | number[]
}