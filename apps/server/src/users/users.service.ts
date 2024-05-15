import { Injectable } from '@nestjs/common';
import { User } from 'ts-contract';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: '1',
      name: 'name',
      age: 1,
      email: 'email',
    },
    {
      id: '2',
      name: 'name',
      age: 1,
      email: 'email',
    }
  ];

    create(user: Omit<User, 'id'>) {
      const newUser = { ...user, id: (this.users.length + 1).toString() };
      this.users.push(newUser);
      return newUser;
    }

    findAll() {
      return this.users;
    }
}
