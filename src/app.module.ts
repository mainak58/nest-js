import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from 'logger/console-logger.service';
import { LoggerService } from 'logger/logger.interface';
import { DogModule } from './dog/dog.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, DogModule, AuthModule, PrismaModule],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }, PrismaService],
  exports: [LoggerService],
})
export class AppModule {}
