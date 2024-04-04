/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:47:05
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:55:47
 * @FilePath: /NestWorld/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

@Controller("user")
export class UserController {
  // private logger = new Logger(UserController.name);

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    this.logger.log("UserController init");
  }

  @Get()
  getUsers(): any {
    this.logger.log("请求 getUsers 成功");
    return this.userService.findAll();
  }

  // @Post()
  // addUser(): any {
  //   return this.userService.create();
  // }

  // @Post()
  // updateUser(userId: string): any {
  //   return this.userService.update(1, user);
  // }

  // @Delete()
  // deleteUser(): any {
  //   //TODO:传递参数
  //   return this.userService.remove(1);
  // }

  @Get("/profile")
  getUserProfile(): any {
    return this.userService.findProfile(2);
  }

  // @Get("logs")
  // getUserLogs(): any {
  //   return this.userService.findUser;
  // }
}
