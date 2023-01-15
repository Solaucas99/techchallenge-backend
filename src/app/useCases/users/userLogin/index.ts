import { UserRepository } from '@usersRep/user/implementations/UserRepository';
import { UserLoginController } from './UserLoginController';
import { UserLoginUseCase } from './UserLoginUseCase';

const repo = new UserRepository();
const useCase = new UserLoginUseCase(repo);
const userLoginController = new UserLoginController(useCase);

export { userLoginController };
