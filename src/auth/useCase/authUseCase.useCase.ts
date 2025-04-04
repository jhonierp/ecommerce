import { HttpException, Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';
import { PasswordService } from '../services/password.service';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthUseCae {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserSharedRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async run(userCredentials: AuthDto) {
    const user = await this.userRepository.findOne({
      where: { email: userCredentials.email },
    });

    if (!user) {
      throw new HttpException('Usuario no encontrado', 404);
    }

    if (!user.password) {
      throw new HttpException('Contraseña no encontrada', 500);
    }

    const verifyPassword = await this.passwordService.compare(
      userCredentials.password,
      user.password,
    );
    if (userCredentials.password === undefined) {
      throw new HttpException('Contraseña no proporcionada', 400);
    }
    if (!verifyPassword) {
      throw new HttpException('Email o contraseña incorrecto', 500);
    }

    if (user.id === undefined) {
      throw new HttpException('ID de usuario no encontrado', 500);
    }

    const token = await this.authService.generateTokens({
      id: user.id,
      email: user.email,
    });
    if (typeof user.id !== 'number') {
      throw new HttpException('ID de usuario no válido', 500);
    }
    return token;
  }
}
