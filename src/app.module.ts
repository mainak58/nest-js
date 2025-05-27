import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DogModule],
})
export class AppModule {}
