/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:47:05
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 10:58:56
 * @FilePath: /NestWorld/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { User } from "src/entities/user.entity";
import { UserQuery } from "./dto/get-user.dto";
import { CreateUserPipe } from "./pipes/create-user.pipe";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("user")
export class UserController {

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    this.logger.log("UserController init");
  }

  @Get()
  getUser(@Query('id') id: any): any {
    console.log("🚀 ~ UserController ~ getUser ~ id:", id)
    return this.userService.find(id);
  }

  @Get('getUsers')
  getUsers(@Query() query: UserQuery): any {
    console.log("🚀 ~ UserController ~ getUsers ~ query:", query)
    return this.userService.findAll(query);
  }

   @Post('addUser')
   addUser(@Body(CreateUserPipe) dto: CreateUserDto): any {
     const user = dto as User
     console.log("🚀 ~ UserController ~ addUser ~ user:", user)
     return this.userService.create(user)
   }

   @Post('updateUser')
   updateUser(@Body() dto: any): any {
     const user = dto as User
     return this.userService.update(user.id, user);
   }

  // @Delete()
  // deleteUser(): any {
  //   return this.userService.remove(1);
  // }

  @Get("/profile")
  @UseGuards(AuthGuard('jwt'))
  getUserProfile(@Query('id', ParseIntPipe) id: any,
    //这里req中的user是通过AuthGuard('jwt)中的validate方法返回的
    //准确的来说是PassportModule来添加的
    @Req() req): any {
    console.log("🚀 ~ UserController ~ getUserProfile ~ id:", id)
    return this.userService.findProfile(id);
  }
}
