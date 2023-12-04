import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(): Promise<any> {
    return this.appService.findAll();
  }

  @Post('users')
  async createUser(@Body() user: UserDto): Promise<any> {
    return this.appService.create(user);
  }
}
