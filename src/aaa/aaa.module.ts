import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { AaaController } from './aaa.controller';
import { AaaService } from './aaa.service';

@Module({
  controllers: [AaaController],
  providers: [AaaService]
})
export class AaaModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('AaaModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AaaModule onApplicationBootstrap');
  }
}
