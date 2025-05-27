import { Injectable } from '@nestjs/common';

type Dog = {
  id: number;
  name: string;
  price: string;
};

@Injectable()
export class DogService {
  private readonly dog: Dog[] = [];

  create(dog: Dog) {
    this.dog.push(dog);
  }

  findAll(): Dog[] {
    return this.dog;
  }

  update(id: number, updateDog: Dog) {
    const index = this.dog.findIndex((d) => d.id === id);

    if (index === -1) {
      return { message: 'Dog not found' };
    }

    this.dog[index] = { ...this.dog[index], ...updateDog };
    return this.dog[index];
  }

  remove(id: number) {
    const index = this.dog.findIndex((d) => d.id === id);

    if (index === -1) {
      return { message: 'Dog not found' };
    }
    this.dog.splice(index, 1);
    return { message: `Dog with ID ${id} removed successfully` };
  }
}
