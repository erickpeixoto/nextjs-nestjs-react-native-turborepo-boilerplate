import { Injectable } from '@nestjs/common';
import { User } from 'database';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  
  constructor(private prisma: PrismaService) { }

    async create(data: Omit<User, 'id'>) {
     const response = await this.prisma.user.create({
        data
      })
      return response;
    }

    getAll() {
      console.log('getting all users')
      return this.prisma.user.findMany();
    }
}
