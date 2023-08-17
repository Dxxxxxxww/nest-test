import {
  Controller,
  OnModuleInit,
  OnApplicationBootstrap
} from '@nestjs/common';

@Controller('aaa')
export class AaaController implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit(): void {
    console.log('AaaController onModuleInit');
  }

  onApplicationBootstrap(): void {
    console.log('AaaController OnApplicationBootstrap');
  }
}
