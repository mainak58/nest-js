// import { Controller, Get, Res } from '@nestjs/common';
// import { Response } from 'express';

// @Controller('cat')
// export class CatController {
//   @Get()
//   findAll(@Res() response: Response): void {
//     response.status(200).send('hello from express');
//   }
// }

import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  // @Get(':id')
  // findOne (@Param() params: any): string {
  //   console.log(params.id);
  // return `This action returns a #${params.id} cat`;
  // }

  @Get(':id/:type')
  findOne(@Param('id') id: string, @Param('type') type: string): string {
    // console.log(first)
    return `This will return ${id} and type is ${type}`;
  }
}
