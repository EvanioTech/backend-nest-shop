import { Body, Controller,  Get,  Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto'
import { UserService } from './user.service';


@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
    }

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }
    
    


}
