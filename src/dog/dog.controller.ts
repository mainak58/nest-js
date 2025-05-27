import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DogService } from './dog.service';

type Dog = {
  id: number;
  name: string;
  price: string;
};

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  async create(@Body() dog: Dog) {
    this.dogService.create(dog);
    return {
      dogDetails: dog,
    };
  }

  @Get()
  findAll(): Dog[] {
    return this.dogService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDog: Dog) {
    return this.dogService.update(+id, updateDog);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
  }
}
