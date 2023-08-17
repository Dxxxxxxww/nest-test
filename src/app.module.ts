import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  // nest 生命周期是按照在 app.module.ts 中的注册顺序来的
  imports: [BbbModule, AaaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
