import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap
} from '@nestjs/common';

@Injectable()
export class AaaService implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit(): void {
    console.log('AaaService onModuleInit');
  }

  onApplicationBootstrap(): void {
    console.log('AaaService OnApplicationBootstrap');
  }
}
