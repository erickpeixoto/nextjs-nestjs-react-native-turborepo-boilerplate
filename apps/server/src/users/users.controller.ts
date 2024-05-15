import { UsersService } from './users.service';
import { contract } from 'ts-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { Controller } from '@nestjs/common';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TsRestHandler(contract.users)
  async handler() {
    return tsRestHandler(contract.users, {
      getAll: async () => {
        const users = await this.usersService.getAll();
        console.log('Users:', users);
        return {
          status: 200,
          body: users 
        };
      },
      create: async ({ body }) => {
        const user = await this.usersService.create(body);
        return {
          status: 201,
          body: user
        };
      }
    });
  }
}
