import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';

@Module({
  controllers: [BbbController],
  providers: [BbbService]
})
export class BbbModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('BbbModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('BbbModule onApplicationBootstrap');
  }
}
