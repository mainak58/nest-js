// import { Controller, Get, Res } from '@nestjs/common';
// import { Response } from 'express';

// @Controller('cat')
// export class CatController {
//   @Get()
//   findAll(@Res() response: Response): void {
//     response.status(200).send('hello from express');
//   }
// }

import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
