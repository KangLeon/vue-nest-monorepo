/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:47:05
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-04 21:08:35
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
  Post,
  Query,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { User } from "src/entities/user.entity";
import { UserQuery } from "./dto/get-user.dto";

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

  @Get()
  getAllUsers(): any {
    console.log("🚀 ~ UserController ~ getUsers ~ getUsers:")
    return this.userService.findAll();
  }

  @Get()
  getUsers(@Query() query: UserQuery): any {
    console.log("🚀 ~ UserController ~ getUsers ~ query:", query)
    return this.userService.findAll();
  }

   @Post()
   addUser(@Body() dto: any): any {
     const user = dto as User
     console.log("🚀 ~ UserController ~ addUser ~ user:", user)
     return this.userService.create(user)
   }

  // @Post()
  // updateUser(userId: string): any {
  //   return this.userService.update(1, user);
  // }

  // @Delete()
  // deleteUser(): any {
  //   return this.userService.remove(1);
  // }

  @Get("/profile")
  getUserProfile(@Query('id') id: any): any {
    console.log("🚀 ~ UserController ~ getUserProfile ~ id:", id)
    return this.userService.findProfile(id);
  }
}
