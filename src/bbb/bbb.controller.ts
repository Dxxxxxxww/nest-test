import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';

@Controller('bbb')
export class BbbController {
  constructor(private readonly bbbService: BbbService) {}

  // form urlencoded 和 json 都是从 body 取值，Nest 内部会根据 content-type 做区分，使用不同的解析方式。
  @Post()
  create(@Body() createBbbDto: CreateBbbDto) {
    return this.bbbService.create(createBbbDto);
  }
  // query 需要放在 param 前面，nest 是从上往下匹配的，如果 param 在前，会将 find_by 当做 id 来识别
  @Get('find_by')
  findByQuery(@Query('name') name: string, @Query('age') age: number) {
    return this.bbbService.findByQuery(name, age);
  }

  @Get()
  findAll() {
    return this.bbbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}
