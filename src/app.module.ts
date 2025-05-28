import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from 'logger/console-logger.service';
import { LoggerService } from 'logger/logger.interface';
import { DogModule } from './dog/dog.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DogModule],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  exports: [LoggerService],
})
export class AppModule {}
