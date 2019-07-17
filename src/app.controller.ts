import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/user.class';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getUsers();
  }

  @Get(":userName")
  signIn(@Param() params) {
    return this.appService.signIn(params.userName);
  }

  @Post()
  signUp(@Body() body: User) {
    console.log(body)
    return this.appService.signUp(body)
  }
}
