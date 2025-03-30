import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './interfaces/user.interfaces';
import { hash } from 'bcrypt';
import { create } from 'domain';

@Injectable()
export class UserService {
    private users: User[] = [];

    

    async createUser(createUserDto: CreateUserDTO): Promise<User> {
        const saltRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltRounds);

        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHashed,
        };

        this.users.push(user);

        console.log(passwordHashed);

        
        return user
}

async getUsers(): Promise<User[]> {
    return this.users;
}
}
