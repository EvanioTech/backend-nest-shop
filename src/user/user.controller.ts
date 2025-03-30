import { Body, Controller,  Get,  Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto'
import { userInfo } from 'os';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return {
        ...user,
        password: undefined
    }
    }
    
    


}
