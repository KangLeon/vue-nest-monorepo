/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-08 20:20:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-08 22:48:10
 * @FilePath: /vue-nest-monorepo/packages/NestWorld/src/roles/roles.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from 'src/entities/roles.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Roles) private roleRepository: Repository<Roles>,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.create(createRoleDto)
    return this.roleRepository.save(role)
  }

  findAll() {
    return this.roleRepository.find()
  }

  findOne(id: number) {
    return this.roleRepository.findOne({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id)
    const newRole = this.roleRepository.merge(role, updateRoleDto)
    return this.roleRepository.save(newRole)
  }

  remove(id: number) {
    return this.roleRepository.delete(id)
  }
}
