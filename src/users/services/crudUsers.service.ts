import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/shared/entities/user.entity';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';

@Injectable()
export class CrudUsersService {
  constructor(private readonly userRepository: UserSharedRepository) {}

  async create(user: UserEntity): Promise<number> {
    const findUserByEmail = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (findUserByEmail) {
      throw new HttpException(
        'Correo electrónico en uso',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userCreated = await this.userRepository.save(user);
    return userCreated.id ?? 0; // Usa ?? para evitar undefined
  }

  async update(user: UserEntity): Promise<void> {
    if (!user.id) {
      throw new HttpException(
        'ID de usuario no proporcionado',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userExist = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (!userExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.update(user.id, user);
  }

  async delete(id: number): Promise<void> {
    const userExist = await this.userRepository.findOne({ where: { id } });

    if (!userExist) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.softDelete(id);
  }
}
