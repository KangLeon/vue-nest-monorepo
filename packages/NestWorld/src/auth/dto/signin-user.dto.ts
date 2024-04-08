import { IsNotEmpty, IsString, Length } from "class-validator";

/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-07 16:22:36
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 17:54:05
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/auth/dto/signin-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class SignInUserDto { 
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    @Length(6, 20, {
        message: `密码长度必须在$constraint1和$constraint2之间，当前传递的值：$value`,
    })
    password: string
}