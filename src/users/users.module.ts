import { Module } from '@nestjs/common';
import { CrudUsersService } from './services/crudUsers.service';
import { UserController } from './controllers/user.controller';
import { SharedModule } from 'src/shared/shared.module';

import { UserSharedRepository } from 'src/shared/repositories/userRepository.repository';
import { PasswordService } from 'src/auth/services/password.service';

import { JwtService } from '@nestjs/jwt';
import { CrudUserUseCase } from './useCase/crudUseCase.UseCase';

@Module({
  providers: [
    CrudUsersService,
    CrudUserUseCase,
    UserSharedRepository,
    PasswordService,
    JwtService,
  ],
  controllers: [UserController],
  imports: [SharedModule.forRoot()],
})
export class UsersModule {}
