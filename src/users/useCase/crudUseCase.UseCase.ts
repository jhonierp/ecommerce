import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/shared/entities/user.entity';
import { PasswordService } from 'src/auth/services/password.service';
import { CrudUsersService } from '../services/crudUsers.service';
import { CreateOrUpdateUserDto } from '../dto/user.dto';

@Injectable()
export class CrudUserUseCase {
  constructor(
    private readonly crudUserService: CrudUsersService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(userDto: CreateOrUpdateUserDto): Promise<number> {
    const passwordHash = await this.passwordService.hash(userDto.password);

    const user: UserEntity = {
      name: userDto.name,
      name2: userDto.name2,
      last_name: userDto.last_name,
      last_name2: userDto.last_name2,
      email: userDto.email,
      password: passwordHash,
      phone: userDto.phone,
      address: userDto.address,
      User_type_id: userDto.User_type_id,
    };
    const createUser = await this.crudUserService.create(user);
    return createUser;
  }

  async update(userDto: CreateOrUpdateUserDto) {
    const user: UserEntity = {
      id: userDto.id,
      name: userDto.name,
      name2: userDto.name2,
      last_name: userDto.last_name,
      last_name2: userDto.last_name2,
      email: userDto.email,
      phone: userDto.phone,
      address: userDto.address,
      User_type_id: userDto.User_type_id,
    };

    if (userDto.password) {
      user.password = await this.passwordService.hash(userDto.password);
    }

    return await this.crudUserService.update(user);
  }

  async delete(id: number): Promise<void> {
    await this.crudUserService.delete(id);
  }
}
