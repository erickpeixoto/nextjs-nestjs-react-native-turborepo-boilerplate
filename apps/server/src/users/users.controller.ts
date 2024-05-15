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
        console.log('getAll');
        return {
          status: 200,
          body: this.usersService.findAll(),
        }
      }
    });
  }
}
