import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cat')
export class CatController {
  @Get()
  findAll(@Res() response: Response): void {
    response.status(200).send('hello from express');
  }
}
