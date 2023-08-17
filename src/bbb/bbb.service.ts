import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap
} from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';

@Injectable()
export class BbbService implements OnApplicationBootstrap, OnModuleInit {
  onModuleInit(): any {
    console.log('BbbService onModuleInit');
  }

  onApplicationBootstrap(): any {
    console.log('BbbService OnApplicationBootstrap');
  }

  create(createBbbDto: CreateBbbDto) {
    return `This action adds a new bbb ${JSON.stringify(createBbbDto)}`;
  }

  findAll() {
    return `This action returns all bbb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb ${updateBbbDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }

  findByQuery(name, age) {
    return `received: name=${name}, age=${age}`;
  }
}
