/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:51:48
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-05 03:08:33
 * @FilePath: /NestWorld/src/user/user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Logs } from "src/entities/logs.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserQuery } from "./dto/get-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(query: UserQuery) {
    const { limit, page, username, gender, role } = query
    const take = limit || 10
    const skip = ((page || 1) - 1) * take
    return this.userRepository.find({
      relations: {
        profile: true,
        roles: true,
      },
      where: {
        profile: {
          gender, 
        },
        roles: {
          id: role,
        }
      },
      skip,
      take,
    });
  }

  find(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async create(user: User) {
    const userTmp = await this.userRepository.create(user);
    return this.userRepository.save(userTmp);
  }

  async update(id: number, user: Partial<User>) {
    const userTemp = await this.findProfile(id)
    const newUser = this.userRepository.merge(userTemp, user)
    //联合模型的更新，需要使用save方法或者queryBuilder
    return this.userRepository.save(newUser)

    //update适合单模型的更新，不适合有关系的模型更新
    //return this.userRepository.save(id, user)
  }

  async remove(id: number) {
    const user = await this.find(id)
    return this.userRepository.remove(user);
  }

  findProfile(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        profile: true,
      },
    });
  }
}
